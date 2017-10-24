import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header>
    <nav className="navbar navbar-inverse">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            WebSiteName
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/profile">Моя страница</Link>
          </li>
        </ul>
        <div className="nav navbar-nav navbar-right">
          <a href="/">
            <span className="fa fa-trash"> Выйти</span>
          </a>
        </div>
      </div>
    </nav>
  </header>
);
