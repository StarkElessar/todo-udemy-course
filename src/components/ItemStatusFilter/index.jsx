import React, { Component } from "react"
import './ItemStatusFilter.scss'

const FilterButton = ({ nameBtn, classBtn, onFilterChange }) => {
  
  return (
    <button
      type="button"
      className={classBtn}
      onClick={onFilterChange}
    >
      {nameBtn}
    </button>
  )
}

export default class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ] 
  
  render() {
    const { filter, onFilterChange } = this.props
    

    return (
      <div className="btn-group">
        {
          this.buttons.map(({ name, label }) => {
            const isActive = filter === name
            const classBtn = isActive ? 'btn--active' : ''

            return (
              <FilterButton
                nameBtn={label}
                classBtn={`btn-filter ${classBtn}`}
                key={name}
                onFilterChange={() => onFilterChange(name)}
              />
            )
          })
        }
      </div>
    )
  }
}