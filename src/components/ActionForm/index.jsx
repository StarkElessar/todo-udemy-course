import React, { Component } from "react"
import './ActionForm.scss'

export default class ActionForm extends Component { 
  state = {
    label: ''
  }
  onLabelChange = (event) => {
    this.setState({
      label: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()

    this.props.onItemAdded(this.state.label)
    this.setState({
      label: ''
    })
  }

  render() {
    const isDisabled = this.state.label === ''
    const buttonDisabled = isDisabled ? 'action-form__btn--disabled' : ''

    return (
      <form onSubmit={this.onSubmit} className="action-form container">
        <input
          title='Поле для добавления задачи в список'
          type="text"
          onChange={this.onLabelChange}
          value={this.state.label}
          className="action-form__input"
          placeholder="Вы, что то планируете?"
        />
        <button
          title='Нажмите эту кнопку, чтобы добавить задачу в список'
          disabled={isDisabled}
          className={`action-form__btn ${buttonDisabled}`}
        >
          Планировать
        </button>
      </form>
    )
  }
}