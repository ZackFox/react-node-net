import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';

class SignIn extends Component {
  render() {
    return (
      <div>
        <p>Войти</p>
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

export default SignIn;
