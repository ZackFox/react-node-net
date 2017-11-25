import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

// import Header from './templates/Header';
import HomePageContainer from '../containers/HomePageContainer';
import SignUpPage from './SignUpPage';
import ProfilePage from './profile/ProfilePage';

class App extends Component {
  render() {
    return (
      <div>
        {/* {header} */}
        <Switch>
          <Route path="/" exact component={HomePageContainer} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/:profileName" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
