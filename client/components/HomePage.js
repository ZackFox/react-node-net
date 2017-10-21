import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginForm from './LoginForm';
import UserWall from './UserWall';

class HomePage extends Component {
  render() {
    return this.props.isAuthenticated ? <UserWall /> : <LoginForm />;
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {})(HomePage);
