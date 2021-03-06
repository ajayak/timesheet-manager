/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import mainPage from './containers/MainPage';

export default () => (
  <Router>
    <App>
      <Switch>
        <Route path="/main" component={mainPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </App>
  </Router>
);
