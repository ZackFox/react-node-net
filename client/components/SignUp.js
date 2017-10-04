import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onSend = e => {
    e.preventDefault();
    console.log('email ' + this.inputEmail.value);
    console.log('pass ' + this.inputPassword.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSend}>
          <input
            type="text"
            name="email"
            ref={el => {
              this.inputEmail = el;
            }}
          />
          <input
            type="password"
            name="password"
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

export default SignUp;
