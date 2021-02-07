import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Clients from '../Pages/Clients';
import Products from '../Pages/Products';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Clients} />
    <Route path="/clients" exact component={Clients} />
    <Route path="/products" exact component={Products} />
  </Switch>
);

export default Routes;
