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
        <input type="text"
          onChange={this.onLabelChange}
          value={this.state.label}
          className="action-form__input"
          placeholder="What needs to be done"
        />
        <button disabled={isDisabled} className={`action-form__btn ${buttonDisabled}`}>Add Todo</button>
      </form>
    )
  }
}