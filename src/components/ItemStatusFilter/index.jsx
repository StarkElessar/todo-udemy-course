import React, { Component } from "react"
import './ItemStatusFilter.scss'

export default class ItemStatusFilter extends Component {
  
  render() {
    return (
      <div className="btn-group">
        <button type="button" className="btn-filter btn-all">All</button>
        <button type="button" className="btn-filter btn-active">Active</button>
        <button type="button" className="btn-filter btn-done">Done</button>
      </div>
    )
  }
}