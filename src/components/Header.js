import React from 'react'
import logo from '../images/logo-mesto.svg'
import { Link, Route } from 'react-router-dom';


function Header({ email }) {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Логотип" />
      <div className="header__section">
      <Route exact path="/">
        <p className="header__email">{email}</p>
        <Link to="/sign-in" className="header__button">
          Выйти
        </Link>
      </Route>

      <Route path="/sign-up">
        <Link to="/sign-in" className="header__button">
          Войти
        </Link>
      </Route>

      <Route path="/sign-in">
        <Link to="/sign-up" className="header__button">
          Регистрация
        </Link>
      </Route>
      </div>
    </header>
  )
}

export default Header
