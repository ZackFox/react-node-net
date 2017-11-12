import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signIn } from '../../actions/userActions';

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
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              ref={el => {
                this.email = el;
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Пароль"
              ref={el => {
                this.password = el;
              }}
            />
          </div>
          <div className="form-group">
            <p className="errorMessage">{this.props.message}</p>
            <input
              type="button"
              className="btn btn-success"
              onClick={this.onSignUp}
              value="войти"
            />
          </div>
        </form>
        <Link to="/signup">Регистрация</Link>
        <Link to="/pass">Забыл пароль</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ message: state.user.message });

LoginForm.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signIn })(LoginForm);
