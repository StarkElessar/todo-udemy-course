import React from "react"
import './Button.scss'

const Button = ({ iconClass, icon, onHundler}) => {

  return (
    <button onClick={onHundler} className={iconClass} type="button">
      <span className="material-icons btn__material">
        {icon}
      </span>
    </button>
  )
}

export default Button