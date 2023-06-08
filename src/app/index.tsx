import { Provider } from 'react-redux';
import Routes from '../routes';
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import * as St from './styles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <St.Container>
          <Routes />
        </St.Container>
      </PersistGate>
    </Provider>
  );
}

export default App;
