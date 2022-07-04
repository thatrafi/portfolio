export interface TrainingType {
  sentence: string;
}

export interface IntentType {
  name: string;
  training_data: [TrainingType];
  response: Array<string>;
}

export interface ClassifyRequestType {
  question: string;
}
