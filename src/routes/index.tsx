import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Clients from '../Pages/Clients';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Clients} />
    <Route path="/clients" exact component={Clients} />
  </Switch>
);

export default Routes;
