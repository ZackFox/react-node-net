import React, { Component } from 'react';

import LoginForm from './LoginForm';

export default () => (
  <div>
    <div className="row">
      <div className="container">
        <div className="col-md-8">
          <h2>Добро пожаловать</h2>
        </div>
        <div className="col-md-4">
          <LoginForm />
        </div>
      </div>
    </div>
  </div>
);
