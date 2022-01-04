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
    return (
      <form onSubmit={this.onSubmit} className="action-form container">
        <input
          onChange={this.onLabelChange}
          className="action-form__input"
          type="text"
          placeholder="input your todo.."
          value={this.state.label}
        />
        <button className="action-form__btn">Add Todo</button>
      </form>
    )
  }
}