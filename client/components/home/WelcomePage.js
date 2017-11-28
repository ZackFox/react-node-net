import React, { Component } from 'react';

import LoginForm from './LoginForm';

export default () => (
  <div>
    <section className="welcome">
      <div className="container">
        <div className="col-md-8">
          <h1> прототип микроблога "Балабол"</h1>
          <a
            className="git"
            href="https://github.com/ZackFox/react-node-net/tree/dev"
          >
            Репозиторий проекта
          </a>
        </div>
        <div className="col-md-4">
          <LoginForm />
        </div>
      </div>
    </section>
    <section className="how-work">
      <div className="container">
        <h3> Как это работает</h3>
        <div className="description-container">
          <div className="descr-block react-bg">
            <h4>Frontend</h4>
          </div>
          <div className="descr-block node-bg">
            <h4>Backend</h4>
          </div>
          <div className="descr-block mongo-bg">
            <h4>База данных</h4>
          </div>
        </div>
      </div>
    </section>
    <section className="features">
      <div className="container">
        <h3> Основные возможности</h3>
        <ul>
          <li>
            <p>Регистрация и авторизация</p>
          </li>
          <li>
            <p>Персональная страница профиля</p>
          </li>
          <li>
            <p>Подписка на других пользователей</p>
          </li>
          <li>
            <p>Персональная лента постов на основе подписок</p>
          </li>
          <li>
            <p>Создание и удаление коротких постов</p>
          </li>
          <li>
            <p>
              (!) Возможность "разболтать" чужой пост "Сплетникам" (подписчикам)
            </p>
          </li>
          <li>
            <p>(!) Комментирование чужих постов и добавление их в Избранное</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
);
