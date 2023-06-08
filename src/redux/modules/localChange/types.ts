export const nameState = '@@router/LOCATION_CHANGE';

export type TLocationState = {
  payload: {
    action: string;
    isFirstRendering: boolean;
    location: {
      pathname?: string;
      search?: string;
      hash?: string;
      key?: string;
      state?: any;
    };
  };
};

const states: any = {
  name: nameState,
  initial: {
    locationBeforeTransitions: null,
  },
};

export default states;
