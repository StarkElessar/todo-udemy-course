import React, { Component } from "react";
import ActionForm from "../ActionForm";
import AppTitle from "../AppTitle";
import ItemStatusFilter from "../ItemStatusFilter";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import AppHeader from "./../AppHeader";
import './App.scss'

export default class App extends Component {
  maxId = 100
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Create React App'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch'),
    ],
    term: '',
    filter: 'all' // active, all, done
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  onDeletedItem = (id) => {
    this.setState(({ todoData }) => {
      const indexTodoDataElement = todoData.findIndex((element) => element.id === id)

      const newArrayTodoData = [
        ...todoData.slice(0, indexTodoDataElement),
        ...todoData.slice(indexTodoDataElement + 1)
      ]

      return {
        todoData: newArrayTodoData
      }
    })
  }

  onAddedItem = (text) => {
    const newItemTodos = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArrayTodoData = [
        ...todoData,
        newItemTodos
      ]

      return {
        todoData: newArrayTodoData
      }
    })
  }
  
  toggleProperty(array, id, propertyName) {
    const indexTodoDataElement = array.findIndex((element) => element.id === id)

    const oldItem = array[indexTodoDataElement]
    const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName] }

    return [
      ...array.slice(0, indexTodoDataElement),
      newItem,
      ...array.slice(indexTodoDataElement + 1)
    ]
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }
  
  onSearchChange = (term) => {
    this.setState({term})
  }

  search(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all': 
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default: 
        return items
    }
  }

  onFilterChange = (filter) => {
    this.setState({filter})
  }


  render() {
    const { todoData, term, filter } = this.state
    const visibleItems = this.filter(
      this.search(todoData, term),
      filter
    )
    const doneCount = todoData.filter((item) => item.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className="app__wrapper">
        <AppHeader />
        <AppTitle done={doneCount} toDo={todoCount} />
        
        <div className="action-group">
          <SearchPanel onSearchChange={this.onSearchChange}/>
          <ItemStatusFilter
            onFilterChange={this.onFilterChange}
            filter={filter} />
        </div>

        <div className="container">
          <TodoList
            todos={visibleItems}
            onDeleted={this.onDeletedItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
        </div>
        
        <ActionForm onItemAdded={this.onAddedItem} />
      </div>
    )
  }
}