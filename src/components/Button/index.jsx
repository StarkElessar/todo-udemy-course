import React from "react"
import './Button.scss'

const Button = ({ titleText, iconClass, icon, onHundler}) => {

  return (
    <button
      title={titleText}
      onClick={onHundler}
      className={iconClass}
      type="button"
    >
      <span className="material-icons btn__material">
        {icon}
      </span>
    </button>
  )
}

export default Button