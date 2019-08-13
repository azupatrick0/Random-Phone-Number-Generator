import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import { RandomPhoneNumberGenerator  } from '../components/index';

const NotFound = () => (
  <div>
    Page Not Found
  </div>
);

const Routes = () => (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path='/home' exact component={RandomPhoneNumberGenerator } />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
);

export default Routes;