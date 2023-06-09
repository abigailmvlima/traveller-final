import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';

import types, { TLocationState } from './types';

import { show } from '../navigate/actions';

function* execute(request: TLocationState) {
  if (!request?.payload.location.pathname) {
    return;
  }
  yield put(show(request?.payload.location.pathname, request?.payload.location.state));
}

const dataExport = [takeEvery(types.name, execute)];
export default dataExport;
