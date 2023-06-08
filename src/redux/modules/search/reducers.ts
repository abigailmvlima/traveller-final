import types, { TSearchState, TSearchStateActions } from './types';

export default (state: TSearchState = types.initial, action: TSearchStateActions) => {
  switch (action.type) {
    case types.name: {
      return {
        ...state,
        request: action?.request,
        loading: true,
        loaded: false,
        error: false,
      };
    }
    case types.success: {
      return {
        ...state,
        response: action?.response,
        loading: false,
        loaded: true,
      };
    }
    case types.error: {
      return {
        ...state,
        response: action?.response,
        error: true,
        loading: false,
        loaded: true,
      };
    }
    default:
      return state;
  }
};
