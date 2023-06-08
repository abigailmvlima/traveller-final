import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import reducers from './modules/reducers';

export default (history: History<unknown>) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });
