import { all } from 'redux-saga/effects';

import modules from './modules/sagas';
const dataSagas = [...modules];

const dataExport = function* rootSaga() {
  yield all(dataSagas);
};
export default dataExport;
