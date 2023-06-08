import { EType } from '../enum/EType';
import { TLocation } from './TLocation';

export type TSearchSagasRequest = {
  request: TSearchRequest;
};

export type TSearchRequest = {
  type: EType;
  location?: string;
  dateEntry?: string;
  dateDeparture?: string;
  adults?: string;
  children?: string;
};

export type TSearchResponse = {
  err: boolean;
  data?: TLocation[];
};
