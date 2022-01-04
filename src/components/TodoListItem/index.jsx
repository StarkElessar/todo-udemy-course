import React, { Component } from "react"
import Button from "../Button"
import './TodoListItem.scss'

export default class TodoListItem extends Component {

  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done
    } = this.props

    return (
      <div className={ done ? 'todo-list__group done' : 'todo-list__group' }>
        <span
          onClick={ onToggleDone }
          className={important ? 'todo-list__title important' : 'todo-list__title not-important'}>
          {label}
        </span>
        <Button
          onHundler={ onDeleted }
          iconClass='btn btn__delete'
          icon='delete' />
        <Button
          onHundler={ onToggleImportant }
          iconClass='btn btn__priority'
          icon='priority_high' />
      </div>
    )
  }
}