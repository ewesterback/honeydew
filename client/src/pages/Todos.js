import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TodoCard from '../components/TodoCard'
import TodoForm from '../components/TodoForm'
import { Button } from 'react-rainbow-components'
import moment from 'moment'

// NEED TO CHANGE THIS
const listId = 1

const Todos = (props) => {
  const mappedTodos = props.itemState.items.map((todo, i) => (
    <TodoCard key={i} todo={todo} handleDelete={props.handleDelete} />
  ))
  return (
    <div className="todos">
      {props.listState.selectedList ? (
        <div>
          {props.itemState.openTodoForm ? (
            <TodoForm
              handleTitleChange={props.handleTitleChange}
              handleDateChange={props.handleDateChange}
              handleContentChange={props.handleContentChange}
              handlePriorityChange={props.handlePriorityChange}
              submitTodo={props.submitTodo}
              {...props}
            />
          ) : (
            <Button
              variant="brand"
              label="Add a To-Do"
              onClick={props.toggleNewTodoForm}
              style={{
                fontFamily: 'Righteous,cursive',
                letterSpacing: '0.03em'
              }}
            />
          )}
        </div>
      ) : null}

      <div className="all-reviews">{mappedTodos}</div>
    </div>
  )
}

export default Todos
