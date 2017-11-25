import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WelcomePage from '../components/home/WelcomePage';
import Dashboard from '../components/home/Dashboard';

const HomePageContainer = ({ isAuthenticated }) =>
  isAuthenticated ? <Dashboard /> : <WelcomePage />;

// location: PropTypes.shape({}).isRequired,
HomePageContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps, {})(HomePageContainer);
