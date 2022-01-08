import React, { Component } from "react"
import './ItemStatusFilter.scss'

const FilterButton = ({ nameBtn, classBtn }) => {
  
  return (
    <button type="button" className={classBtn}>{nameBtn}</button>
  )
}

export default class ItemStatusFilter extends Component {
  
  render() {

    return (
      <div className="btn-group">
        <FilterButton nameBtn='All' classBtn='btn-filter btn--active' />
        <FilterButton nameBtn='Active' classBtn='btn-filter' />
        <FilterButton nameBtn='Done' classBtn='btn-filter' />
      </div>
    )
  }
}