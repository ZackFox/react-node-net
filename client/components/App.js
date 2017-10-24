import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeContainer from './HomeContainer';
import SignUpPage from './SignUpPage';
// import ProfilePage from './profile/ProfilePage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/signup" component={SignUpPage} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}
