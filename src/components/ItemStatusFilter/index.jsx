import React, { Component } from "react"
import './ItemStatusFilter.scss'
export default class ItemStatusFilter extends Component {
  buttons = [
    { statusName: 'all', label: 'All' },
    { statusName: 'active', label: 'Active' },
    { statusName: 'done', label: 'Done' }
  ]
  
  render() {
    const { filter, onFilterChange } = this.props
    

    return (
      <div className="btn-group">
        {
          this.buttons.map(({ statusName, label }) => {
            const isActive = filter === statusName
            const classBtn = isActive ? 'btn--active' : ''
            
            return (
              <button type="button"
                key={statusName}
                className={`btn-filter ${classBtn}`}
                onClick={() => onFilterChange(statusName)}
              >
                {label}
              </button>
            )
          })
        }
      </div>
    )
  }
}