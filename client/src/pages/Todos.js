import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import TodoCard from '../components/TodoCard'
import TodoForm from '../components/TodoForm'
import { Button } from 'react-rainbow-components'
import moment from 'moment'

// import {
//   LoadItems,
//   AddItem,
//   RemoveItem,
//   StageItem,
//   //NewTitle,
//   //NewContent,
//   //NewDate,
//   ToggleTodoForm
// } from '../store/actions/ItemActions'

// const mapStateToProps = ({ itemState }) => {
//   return { itemState }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchTodos: (listId) => dispatch(LoadItems(listId)),
//     handleTodoForm: () => dispatch(ToggleTodoForm()),
//     handleFormInput: (inputs) => dispatch(StageItem(inputs)),
//     //newTitleChange: (title) => dispatch(NewTitle(title)),
//     //handleDateChange: (date) => dispatch(NewDate(date)),
//     //newContentChange: (content) => dispatch(NewContent(content)),
//     handleSubmit: (body) => dispatch(AddItem(body)),
//     deleteTodo: (id) => dispatch(RemoveItem(id))
//   }
// }
// NEED TO CHANGE THIS
const listId = 1

const Todos = (props) => {
  useEffect(() => {
    props.loadTodosForList(listId)
    console.log('This should be executed once')
  }, [])

  // const submitTodo = (event) => {
  //   event.preventDefault()
  //   let date = moment(props.itemState.newItem.due_date).format('M-D-YYYY')
  //   let reqBody = {
  //     title: props.itemState.newItem.title,
  //     content: props.itemState.newItem.content,
  //     priority: props.itemState.newItem.priority,
  //     due_date: date,
  //     list_id: listId
  //   }
  //   props.handleSubmit(reqBody)
  //   props.handleTodoForm()
  // }
  // const handleContentChange = (event) => {
  //   let modifiedState = { ...props.itemState }
  //   modifiedState.content = event.target.value
  //   props.handleFormInput(modifiedState)
  // }
  // const handleTitleChange = (event) => {
  //   let modifiedState = { ...props.itemState }
  //   modifiedState.title = event.target.value
  //   props.handleFormInput(modifiedState)
  // }
  // const handleDateChange = (event) => {
  //   let modifiedState = { ...props.itemState }
  //   modifiedState.due_date = new Date(event.target.value)
  //   props.handleFormInput(modifiedState)
  // }
  // const handlePriorityChange = (event) => {
  //   let modifiedState = { ...props.itemState }
  //   modifiedState.priority = event.target.value
  //   props.handleFormInput(modifiedState)
  // }
  // const handleDelete = (id) => {
  //   props.deleteTodo(id)
  // }

  const mappedTodos = props.itemState.items.map((todo, i) => (
    <TodoCard key={i} todo={todo} handleDelete={props.handleDelete} />
  ))
  return (
    <div className="todos">
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
          style={{fontFamily:'Righteous,cursive',letterSpacing:'0.03em'}}
        />
      )}

      <div className="all-reviews">{mappedTodos}</div>
    </div>
  )
}
//<div className="all-reviews">{mappedTodos}</div>

//export default connect(mapStateToProps, mapDispatchToProps)(Todos)
export default Todos
