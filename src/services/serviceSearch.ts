import mock from '../mocks/cardsHome';
import { TSearchRequest, TSearchResponse } from '../types/TSearch';

export const buscarDados = async (request: TSearchRequest): Promise<TSearchResponse> => {
  const mockBool = Boolean(process.env.REACT_APP_MOCK);
  console.log(999, request);
  if (mockBool == true)
    return {
      err: false,
      data: mock.filter((f) => f.type == request.type),
    };

  return {
    err: false,
    data: undefined,
  };
};
