import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';

import types from './types';

import { success, error } from './actions';
import { buscarDados } from '../../../services/serviceSearch';
import { TSearchRequest, TSearchResponse } from '../../../types/TSearch';

function* execute(request: TSearchRequest) {
  const response: TSearchResponse = yield buscarDados(request);
  if (response?.err) yield put(error(response));
  console.log('sagas', response);
  yield put(success(response));
}

const dataExport = [takeEvery(types.name, execute)];
export default dataExport;
