export interface TrainingType {
  sentence: string;
}

export interface IntentType {
  name: string;
  training_data: [TrainingType];
  response: Array<string>;
}

export interface ProjectType {
  startDate: string;
  endDate: string | null;
  name: string;
  description: string;
  platform: string;
  link: string;
  imgSrc?: string;
}

export interface ClassifyRequestType {
  question: string;
}
