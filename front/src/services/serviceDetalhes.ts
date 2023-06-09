import mock from '../mocks/detalhes.json';
export const buscarDetalhesPorId = (request: { id: string }) => {
  const mockBool = Boolean(process.env.REACT_APP_MOCK);
  if (mockBool == true) return mock;
};
