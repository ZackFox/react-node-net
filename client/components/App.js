import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import SignUpPage from './SignUpPage';
import NotFoundPage from './NotFoundPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signup" component={SignUpPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
