import Intent from '../../../data/schemes/intentScheme';
import { ClassifyRequestType, IntentType } from '../../../data/types';
import dbConnect from '../../../lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';
import natural from 'natural';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      try {
        const data = req.body as ClassifyRequestType;
        const result = await Intent.find();
        //prepare data
        var pre_data: any = [];
        var convert_data: any = [];
        var num_sentence_allclass = 0;
        var num_word_allclass: number = 0;
        var tokenizer = new natural.WordTokenizer();
        result.map(function (data) {
          data.training_data.map(function (res: { sentence: any }) {
            num_sentence_allclass += 1;
            convert_data.push({
              class: data.name,
              training_data: res.sentence,
              response: data.response,
            });
          });
        });

        for (var i = 0; i < convert_data.length; i++) {
          const existingClass = pre_data.find(
            (d: any) => d.class == convert_data[i].class
          );

          if (existingClass) {
            existingClass.training_data += ',' + convert_data[i].training_data;
          } else {
            pre_data.push({
              class: convert_data[i].class,
              training_data: convert_data[i].training_data,
              response: convert_data[i].response,
            });
          }
        }
        // tokenize and stemmed
        var token_data: any = [];
        for (var j in pre_data) {
          const num_sentence_inclass =
            pre_data[j].training_data.split(',').length;
          pre_data[j].training_data = tokenizer.tokenize(
            pre_data[j].training_data
          );
          var word_stemmed: any = [];
          var count_token = 1;

          pre_data[j].training_data.map(function (data: string) {
            word_stemmed.push(natural.LancasterStemmer.stem(data));
            token_data.push(natural.LancasterStemmer.stem(data));
          });
          var stemmed_data: any = [];
          var filteredDupes = word_stemmed.filter(
            (e: any, i: any, a: string | any[]) => a.indexOf(e) === i
          );
          //var num_of_words_in_class_comonality = filteredDupes.length
          var num_of_words_in_class = word_stemmed.length;
          // var findDups = word_stemmed.filter((e, i, a) => a.indexOf(e) !== i)
          filteredDupes.map(function (data: any) {
            num_word_allclass += 1;
            var numOfword = word_stemmed.filter(function (x: any) {
              return x === data;
            }).length;
            stemmed_data.push({
              word: data,
              count: numOfword,
              prob: numOfword / num_of_words_in_class,
            });
          });
          pre_data[j].training_data = stemmed_data;
          pre_data[j].num_of_words = num_of_words_in_class; // non comonality
          pre_data[j].prob_class = num_sentence_inclass / num_sentence_allclass;
        }
        var num_of_commonality_word_allclass = token_data.filter(
          (e: any, i: any, a: string | any[]) => a.indexOf(e) === i
        ).length;

        // user
        var stemmed_qst = tokenizer.tokenize(data.question);
        for (var k in stemmed_qst) {
          stemmed_qst[k] = natural.LancasterStemmer.stem(stemmed_qst[k]);
        }
        // filterd user input remove commonality ( optional)
        var result_temp = [];
        for (var l in pre_data) {
          var data_prob: number[] = [];
          stemmed_qst.map(function (data) {
            const index_found = pre_data[l].training_data.findIndex(
              (e: { word: string }) => e.word == data
            );
            if (index_found >= 0) {
              data_prob.push(pre_data[l].training_data[index_found].count);
            } else {
              data_prob.push(0);
            }
          });
          result_temp.push({
            class: pre_data[l].class,
            freq: data_prob,
            num_words: pre_data[l].num_of_words,
            class_prob: pre_data[l].prob_class,
            response: pre_data[l].response,
            result: 0,
          });
          //const shouldLaplace = result_temp[pre_data[i].class].freq.findIndex(e => e == 0)

          for (var rt in result_temp) {
            var result_lapalace = 1;
            for (var j in result_temp[rt].freq) {
              result_lapalace *=
                (result_temp[rt].freq[j] + 1) /
                (result_temp[rt].num_words + num_of_commonality_word_allclass);
            }
            result_lapalace *= result_temp[rt].class_prob;
            result_temp[rt].result = result_lapalace;
          }
        }
        var response = sortJSON(result_temp, 'result', 'DESC')[0];
        res.status(200).json({
          class: response.class,
          response: response.response[0],
          scor: response.result,
        });
      } catch (err) {
        res.status(400).send({ message: err });
      }
      break;
  }
};

function sortJSON(arr: any, key: string, way: string) {
  return arr.sort(function (a: any, b: any) {
    var x = a[key];
    var y = b[key];
    if (way === 'ASC') {
      return x < y ? -1 : x > y ? 1 : 0;
    }
    if (way === 'DESC') {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
}

export default handler;
