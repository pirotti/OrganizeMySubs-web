import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Playlists from './pages/Playlists'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/playlists" component={Playlists} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
