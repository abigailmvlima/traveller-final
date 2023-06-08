import { TLocation } from './TLocation';

export type TSearchRequest = {};

export type TSearchResponse = {
  err: boolean;
  data?: TLocation[];
};
