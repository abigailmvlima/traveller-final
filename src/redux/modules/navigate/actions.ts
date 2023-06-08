import types from './types';

export const show = (route: string, data: any) => {
  return {
    type: types.name,
    data: data,
    current: route,
  };
};

export const acSuccess = () => ({
  type: types.success,
});

export const acError = (payload?: any): any => ({
  type: types.name,
  payload: payload,
});
