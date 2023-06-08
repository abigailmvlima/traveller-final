export const name = 'NAVIGATE';
const states = {
  name,
  execute: name,
  success: `${name}_SC`,
  error: `${name}_ER`,
  initial: {
    loading: false,
    loaded: true,
    error: false,
    data: undefined,
  },
};

export type TNavigateStateActions = {
  type: string;
  data?: any;
  current?: string;
};

export type TNavigateState = {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  data?: undefined;
  routeKey?: {
    current?: string;
  };
};

export default states;
