import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../app/history';

import HomeView from '../views/inicioView';
import DetalhesView from '../views/detalhesView';
import PesquisaView from '../views/pesquisaView';

export default () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact={false} path="/defalhes" component={DetalhesView} />
      <Route exact={false} path="/pesquisa" component={PesquisaView} />
      <Route exact={false} path="/" component={HomeView} />
      <Route path="*" exact={true} component={HomeView} />
    </Switch>
  </ConnectedRouter>
);
