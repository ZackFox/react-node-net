import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logOut } from '../../actions/userActions';

class Header extends Component {
  onLogOut = e => {
    e.preventDefault();
    this.props.logOut();
  };

  render() {
    let button;
    let navlinks;

    if (this.props.isAuthenticated) {
      button = (
        <a href="/" onClick={this.onLogOut}>
          Выйти
          <span className="fa fa-trash" />
        </a>
      );
      navlinks = (
        <ul className="nav navbar-nav">
          <li>
            <a href={`/${this.props.user.username}`}>
              {this.props.user.screenName}
            </a>
          </li>
          <li className="active">
            <Link to="/">Уведомления</Link>
          </li>
        </ul>
      );
    } else {
      navlinks = null;
      button = (
        <a href="/">
          Войти
          <span className="fa fa-trash" />
        </a>
      );
    }

    return (
      <header>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                Балабол
              </a>
            </div>
            {navlinks}
            <div className="nav navbar-nav navbar-right">{button}</div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
});

Header.propTypes = {
  user: PropTypes.shape({}).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  logOut: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logOut })(Header);
