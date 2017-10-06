import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpRequest } from '../actions/signUp';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSend = e => {
    e.preventDefault();
    this.props.signUpRequest({
      email: this.inputEmail.value,
      username: this.inputUsername.value,
      password: this.inputPassword.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSend}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            ref={el => {
              this.inputEmail = el;
            }}
          />
          <input
            type="text"
            name="username"
            placeholder="Имя на сайте"
            ref={el => {
              this.inputUsername = el;
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            ref={el => {
              this.inputPassword = el;
            }}
          />
          <input type="submit" value="войти" />
        </form>
      </div>
    );
  }
}

export default connect(null, { signUpRequest })(SignUp);
