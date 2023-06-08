import types from './types';

export const set = (data: any) => {
  return {
    type: types.name,
    payload: {
      data: data,
    },
  };
};

export const clear = () => ({
  type: types.clear,
});
