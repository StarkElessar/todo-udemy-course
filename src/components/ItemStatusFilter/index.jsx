import React, { Component } from "react"
import './ItemStatusFilter.scss'
export default class ItemStatusFilter extends Component {
  buttons = [
    { statusName: 'all', label: 'All', titleText: 'Нажмите, чтобы выбрать все дела' },
    { statusName: 'active', label: 'Active', titleText: 'Нажмите, чтобы выбрать активные дела' },
    { statusName: 'done', label: 'Done', titleText: 'Нажмите, чтобы выбрать выполненые дела' }
  ]
  
  render() {
    const { filter, onFilterChange } = this.props
    

    return (
      <div className="btn-group">
        {
          this.buttons.map(({ statusName, label, titleText }) => {
            const isActive = filter === statusName
            const classBtn = isActive ? 'btn--active' : ''
            
            return (
              <button
                title={titleText}
                type="button"
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