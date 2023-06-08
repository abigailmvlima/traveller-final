import { EType } from '../enum/EType';
import { TAssessment } from './TAssessment';

export type TLocation = {
  id: string;
  type: EType;
  bookNow: boolean;
  title: string;
  stars?: number;
  distance?: string;
  summary?: string;
  text?: string;
  photo?: string;
  photos?: string[];
  assessments?: TAssessment[];
  convenience?: TConvenience;
  pricePerNight?: number;
  [x: string]: any;
};

export type TConvenience = {
  wifi: boolean;
  pool: boolean;
  parking: boolean;
  airConditioning: boolean;
  academy: boolean;
};
