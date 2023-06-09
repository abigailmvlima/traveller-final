import types from './types';

const reduceState = (state = types.initial, action: { type: any; payload: { location: any } }) => {
  switch (action.type) {
    case types.name: {
      return { ...state, ...action.payload?.location };
    }

    default:
      return state;
  }
};

const dataExport = {
  [types.name]: reduceState,
};

export default dataExport;
