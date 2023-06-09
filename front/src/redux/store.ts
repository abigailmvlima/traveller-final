import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

export const history = createBrowserHistory();
const composeEnhancers: typeof compose =
  (window as Window & typeof globalThis).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducers = reducers(history);
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history)))
);

const persistor = persistStore(store);
sagaMiddleware.run(sagas);
export type RootState = ReturnType<typeof rootReducers>;

export { store, persistor };
