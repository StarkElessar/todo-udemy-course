import React, { Component } from "react"
import './SearchPanel.scss'

export default class SearchPanel extends Component {
  state = {
    term: ''
  }
  onSearchChange = (event) => {
    const term = event.target.value
    this.setState({ term })
    this.props.onSearchChange(term)
  }

  render() {
    return (
      <input
        title="Поле для поиска существующих дел"
        className="search-panel"
        type="text"
        placeholder="Найти дела.."
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    )
  }
}