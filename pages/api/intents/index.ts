import Intent from '../../../data/schemes/intentScheme';
import { IntentType } from '../../../data/types';
import dbConnect from '../../../lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  switch (req.method) {
    case 'POST':
      const data = req.body as IntentType;
      const dataPost = new Intent({
        name: data.name,
        training_data: data.training_data,
        response: data.response,
      });
      // save to DB
      const saveIntent = await dataPost.save();
      res.status(200).json(saveIntent);
      break;
    case 'GET':
      try {
        const data = await Intent.find();
        res.status(200).send(data);
      } catch (err) {
        res.status(400).send(err);
      }
      break;
  }
};

export default handler;
