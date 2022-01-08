import React from "react"
import './AppTitle.scss'

const AppTitle = ({toDo, done}) => {
  return (
    <div className="app-title__wrapper">
      <h1 className="app-title__title">Ваш список дел</h1>
      <h3 className="app-title__description">{toDo} к выполнению, {done} выполнено</h3>
    </div>
  )
}

export default AppTitle