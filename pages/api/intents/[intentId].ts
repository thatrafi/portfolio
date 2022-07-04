import Intent from '../../../data/schemes/intentScheme';
import { IntentType } from '../../../data/types';
import dbConnect from '../../../lib/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { intentId } = req.query;
  await dbConnect();
  switch (req.method) {
    case 'GET':
      try {
        const data = await Intent.findOne({ _id: intentId });
        res.status(200).send(data);
      } catch (err) {
        res.status(400).send(err);
      }
      break;
    case 'PUT':
      try {
        const data = req.body as IntentType;
        await Intent.updateOne(
          {
            _id: intentId,
          },
          {
            $set: data,
          }
        );
        res.status(200).send({ message: `Successfully Update ${intentId}` });
      } catch (err) {
        res.status(400).json({
          message: err,
        });
      }
      break;
    case 'DELETE':
      try {
        const deleteData = await Intent.remove({
          _id: intentId,
        });
        res.status(200).send(deleteData);
      } catch (err) {
        res.status(400).json({
          message: err,
        });
      }
      break;
  }
};

export default handler;
