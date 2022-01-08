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
        className="search-panel"
        type="text"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    )
  }
}