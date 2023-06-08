import { TSearchRequest, TSearchResponse } from '../../../types/TSearch';
import types from './types';

export const execute = (request: TSearchRequest) => {
  return {
    type: types.name,
    request: request,
  };
};

export const success = (response: TSearchResponse) => {
  return {
    type: types.success,
    response: response,
  };
};

export const error = (response: TSearchResponse) => {
  return {
    type: types.error,
    response: response,
  };
};
