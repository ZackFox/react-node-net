import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import HomeContainer from './HomeContainer';
import SignUpPage from './SignUpPage';
import NotFoundPage from './NotFoundPage';
import Header from './templates/Header';
import WelcomePage from './home/WelcomePage';
import Dashboard from './home/Dashboard';
import ProfilePage from './profile/ProfilePage';

class App extends Component {
  render() {
    const { location, isAuthenticated } = this.props;
    let header = <Header />;
    if (location.pathname === '/' && !isAuthenticated) {
      header = null;
    } else if (location.pathname === '/signup') {
      header = null;
    }

    return (
      <div>
        {header}
        <Switch>
          <Route
            path="/"
            exact
            component={isAuthenticated ? Dashboard : WelcomePage}
          />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps, {})(App));
