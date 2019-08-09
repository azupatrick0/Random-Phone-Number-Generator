import React from 'react';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';
import { RandomPhoneNumberGenerator  } from '../components/index';

const Routes = () => (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path='/' exact component={RandomPhoneNumberGenerator } />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
);

export default Routes;