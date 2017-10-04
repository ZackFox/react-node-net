import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import SignIn from './SignIn';

class Home extends Component {
  render() {
    return (
      <div>
        <h3> Welcome page </h3>
        <SignIn />
        <Link to="/signup">Регистрация</Link>
        <Link to="/chat">Чат</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Home);
