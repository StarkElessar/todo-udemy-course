import React from "react";
import './AppHeader.scss'

const AppHeader = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img className="header__logo-img" src="https://placehold.co/40" alt="logo" />
        </div>
        <span className="header__title">Todo App</span>
      </div>
    </header>
  )
}

export default AppHeader