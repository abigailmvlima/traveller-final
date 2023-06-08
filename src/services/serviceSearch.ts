import mock from '../mocks/cardsHome';
import { TSearchRequest, TSearchResponse } from '../types/TSearch';

export const buscarDados = async (request: TSearchRequest): Promise<TSearchResponse> => {
  const mockBool = Boolean(process.env.REACT_APP_MOCK);
  if (mockBool == true)
    return {
      err: false,
      data: mock,
    };

  return {
    err: false,
    data: undefined,
  };
};
