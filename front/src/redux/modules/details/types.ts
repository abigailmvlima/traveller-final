import { TLocation } from '../../../types/TLocation';

export const name = 'DETAILS';
const states = {
  name,
  execute: name,
  clear: `${name}_CL`,
  initial: {
    loading: false,
    loaded: true,
    error: false,
    data: undefined,
  },
};

export type TDetailsStateActions = {
  type: string;
  payload?: {
    data?: TLocation[];
  };
};

export type TDetailsState = {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  data?: TDetailsStateActions;
};

export default states;
