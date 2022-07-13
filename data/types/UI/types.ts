export enum ImageSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

export enum ArrowType {
  RIGHT = 'right'
}

export interface ProjectCollection{
  startDate: string;
  endDate: string | null;
  name: string;
  description: string;
  link: string;
  imgSrc?: string;
}