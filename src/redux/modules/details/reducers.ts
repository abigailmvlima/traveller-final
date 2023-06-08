import types, { TDetailsState, TDetailsStateActions } from './types';

export default (state: TDetailsState = types.initial, action: TDetailsStateActions) => {
  switch (action.type) {
    case types.name: {
      return {
        ...state,
        data: action.payload?.data,
        loading: true,
        loaded: false,
        error: false,
      };
    }
    case types.clear: {
      const payload = action?.payload;
      return {
        ...state,
        data: undefined,
        loading: false,
        loaded: true,
        error: payload || 'unexpected error',
      };
    }
    default:
      return state;
  }
};
