import cardsHome from '../mocks/cardsHome';
import { HttpOptions, HttpResponse } from '../types/THttp';
import { TSearchRequest, TSearchResponse } from '../types/TSearch';
import { getRequest } from '../utils/service.https';

export const buscarDados = async (request: TSearchRequest): Promise<TSearchResponse> => {
  // const mockBool = Boolean(process.env.REACT_APP_MOCK);
  // if (mockBool == true)
  //   return {
  //     err: false,
  //     data: cardsHome().filter((f) => f.type == request.type),
  //   };

  const options: HttpOptions = {
    path: `${process.env.REACT_APP_API_URL}/locations`,
  };

  const params = {
    ...(request.type ? { type: request.type } : {}),
    ...(request.limit ? { limit: request.limit } : {}),
  };

  const response: HttpResponse = await getRequest(options, params);

  if (response.err) {
    return {
      err: true,
      data: undefined,
    };
  }

  const data = response.data;
  return data || [];
};
