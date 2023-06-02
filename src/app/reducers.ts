import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export default (history: History<unknown>) =>
  combineReducers({
    router: connectRouter(history),
  });
