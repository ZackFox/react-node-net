import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../actions/authActions';

class SignIn extends Component {
  onSignUp = () => {
    this.props.signIn({
      email: this.email.value,
      password: this.password.value,
    });
  };

  render() {
    return (
      <div>
        <p>Войти</p>
        <form onSubmit={this.onSend}>
          <input
            type="text"
            name="email"
            ref={el => {
              this.email = el;
            }}
          />
          <input
            type="password"
            name="password"
            ref={el => {
              this.password = el;
            }}
          />
          <p className="errorMessage">{this.props.message}</p>
          <input type="button" onClick={this.onSignUp} value="войти" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ message: state.auth.message });

export default connect(mapStateToProps, { signIn })(SignIn);
