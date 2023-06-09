import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';

import types, { TSearchStateActions } from './types';

import { success, error } from './actions';
import { buscarDados } from '../../../services/serviceSearch';
import { TSearchResponse } from '../../../types/TSearch';

function* execute(data: TSearchStateActions) {
  if (!data.request) {
    yield put(error());
    return;
  }

  const response: TSearchResponse = yield buscarDados(data?.request);
  if (response?.err) yield put(error(response));
  yield put(success(response));
  return;
}

const dataExport = [takeEvery(types.name, execute)];
export default dataExport;
