import { Schema, model, models } from 'mongoose';
import { ProjectType } from '../types';

const ProjectSchema = new Schema<ProjectType>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = models.Project || model<ProjectType>('Project', ProjectSchema);

export default Project;
