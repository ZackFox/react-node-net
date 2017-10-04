import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import SignUp from './SignUp';
import Chat from './chat/Chat';

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signup" component={SignUp} />
        <Route path="/chat" component={Chat} />
      </Switch>
    );
  }
}
