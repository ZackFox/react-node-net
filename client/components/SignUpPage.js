import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signUp } from '../actions/userActions';

class SignUpPage extends Component {
  onSignUp = e => {
    e.preventDefault();
    this.props.signUp({
      email: this.email.value,
      username: this.username.value,
      password: this.password.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSignUp}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            ref={el => {
              this.email = el;
            }}
          />
          <input
            type="text"
            name="username"
            placeholder="Имя на сайте"
            ref={el => {
              this.username = el;
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            ref={el => {
              this.password = el;
            }}
          />
          <input type="submit" value="Зарегистрироваться" />
        </form>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  signUp: PropTypes.func.isRequired,
};

export default connect(null, { signUp })(SignUpPage);
