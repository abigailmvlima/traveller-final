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
  attributes?: TLocationAttributes;
  [x: string]: any;
};

export type TConvenience = {
  wifi: boolean;
  pool: boolean;
  parking: boolean;
  airConditioning: boolean;
  academy: boolean;
};

export type TLocationAttributes = {
  title?: string;
  data?: TLocationAttributesData[];
};

export type TLocationAttributesData = {
  title?: string;
  item?: TLocationAttributesItem[];
};

export type TLocationAttributesItem = {
  title?: string;
  description?: string;
};
