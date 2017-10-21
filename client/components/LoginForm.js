import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../actions/authActions';

class LoginForm extends Component {
  onSignUp = () => {
    this.props.signIn({
      email: this.email.value,
      password: this.password.value,
    });
  };

  render() {
    return (
      <div>
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
        <Link to="/signup">Регистрация</Link>
        <Link to="/pass">Забыл пароль</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ message: state.auth.message });

LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signIn })(LoginForm);
