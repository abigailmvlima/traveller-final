import { TLocation } from '../../../types/TLocation';

export const name = 'SEARCH';
const states = {
  name,
  execute: name,
  success: `${name}_SC`,
  error: `${name}_ER`,
  initial: {
    loading: false,
    loaded: true,
    error: false,
    request: undefined,
    response: undefined,
  },
};

export type TSearchStateActions = {
  type: string;
  request?: {
    data?: TLocation[];
  };
  response?: {
    data?: TLocation[];
  };
};

export type TSearchState = {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  request?: {};
  response?: {
    data?: TLocation[];
  };
};

export default states;
