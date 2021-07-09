import React from 'react'
import {
  Input,
  Button,
  DatePicker,
  Textarea,
  Card
} from 'react-rainbow-components'
//import 'rsuite/dist/styles/rsuite-default.css'

const TodoForm = (props) => {
  return (
    <div className="todo-form">
      <Card>
        <div className="form-card">
          <DatePicker
            minDate={new Date()}
            placeholder="Due Date"
            onChange={props.handleDateChange}
            value={props.itemState.newItem.due_date}
            className="form-item"
            id="form-date-picker"
          />
          <Input
            placeholder="title"
            value={props.itemState.newItem.title}
            onChange={props.handleTitleChange}
            className="form-item"
          />
          <Input
            placeholder="priority"
            value={props.itemState.newItem.priority}
            onChange={props.handlePriorityChange}
            className="form-item"
          />
          <Textarea
            placeholder="content"
            value={props.itemState.newItem.content}
            onChange={props.handleContentChange}
            className="form-item"
          />
          <Button
            variant="destructive"
            onClick={props.toggleNewTodoForm}
            label="Cancel"
            className="form-item"
          />
          <Button
            variant="success"
            onClick={props.submitTodo}
            label="Submit To-do"
            className="form-item"
          />
        </div>
      </Card>
    </div>
  )
}
export default TodoForm
