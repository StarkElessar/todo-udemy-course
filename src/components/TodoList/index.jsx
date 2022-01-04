import React from "react"
import TodoListItem from "../TodoListItem"
import './TodoList.scss'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  return (
    <ul className="todo-list">
      {todos.map((item) => {
        const { id } = item

        return (
          <li className="todo-list__item" key={id}>
            <TodoListItem
              {...item}
              onDeleted={() => onDeleted(id)}
              onToggleImportant={() => onToggleImportant(id)}
              onToggleDone={() => onToggleDone(id)}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList