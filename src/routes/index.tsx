import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../app/history';

import HomeView from '../views/inicioView';

export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={HomeView} />
      <Route path="*" exact={true} component={HomeView} />
    </Switch>
  </ConnectedRouter>
);
