import React from "react";
import './AppHeader.scss'
import logo from '../../assets/logo.svg'

const AppHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="logo" />
        </div>
        <span className="header__title">Todo App</span>
      </div>
    </header>
  )
}

export default AppHeader