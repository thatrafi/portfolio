import { Schema, model, models, connect } from 'mongoose';
import { IntentType } from '../types';

const IntentSchema = new Schema<IntentType>({
  name: {
    type: String,
    required: true,
  },
  training_data: {
    type: [
      {
        sentence: {
          type: String,
        },
      },
    ],
  },
  response: {
    type: [String],
  },
},{ timestamps: true });

const Intent = models.Intent || model<IntentType>('Intent', IntentSchema);

export default Intent;
