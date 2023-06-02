import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();
const composeEnhancers = compose; // window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ["LOGIN", "PARAMS"],
  // blacklist: ['SESS_CONFIG'],
};

// const sessionStart = () => {
//   const theme = Cookies.get("theme");
//   localStorage.setItem("theme", theme ? theme : "dark");
// };

const persistedReducer = persistReducer(persistConfig, reducers(history));
const store = createStore(
  persistedReducer,
  // sessionStart(),
  composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history)))
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);
export { store, persistor };
