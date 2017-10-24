import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

// import Content from './Content';
import Header from './templates/Header';
import WelcomePage from './WelcomePage';
import Dashboard from './dashboard/Dashboard';
import ProfilePage from './profile/ProfilePage';

const HomeContainer = props => (
  <div>
    {props.location.pathname === '/' && !props.isAuthenticated ? null : (
      <Header />
    )}

    <Route
      path="/"
      exact
      render={() => (!props.isAuthenticated ? <WelcomePage /> : <Dashboard />)}
    />
    <Route path="/profile" component={ProfilePage} />
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

HomeContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {})(HomeContainer);
