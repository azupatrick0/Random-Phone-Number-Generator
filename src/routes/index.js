import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RandomPhoneNumberGenerator from '../pages/index';
import NotFound from '../components/NotFound';

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={RandomPhoneNumberGenerator } />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
);

export default Routes;