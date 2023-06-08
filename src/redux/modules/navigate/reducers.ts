import types, { TNavigateState, TNavigateStateActions } from './types';

export default (state: TNavigateState = types.initial, action: TNavigateStateActions) => {
  switch (action.type) {
    case types.name: {
      const routeKey: any = {
        current: action?.current,
        last: state?.routeKey?.current || null,
      };

      return {
        ...state,
        data: action?.data,
        routeKey,
        loading: true,
        loaded: false,
        error: false,
      };
    }
    case types.success: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false,
      };
    }
    case types.error: {
      const payload = action?.data;
      return {
        ...state,
        loading: false,
        loaded: true,
        error: payload || 'unexpected error',
      };
    }
    default:
      return state;
  }
};
