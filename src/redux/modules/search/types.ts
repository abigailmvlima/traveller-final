import { TLocation } from '../../../types/TLocation';
import { TSearchRequest } from '../../../types/TSearch';

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
  request?: TSearchRequest;
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
