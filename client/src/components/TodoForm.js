import React from 'react'
import {
  Input,
  Button,
  DatePicker,
  Textarea,
  Card,
  CheckboxToggle
} from 'react-rainbow-components'
//import 'rsuite/dist/styles/rsuite-default.css'

const TodoForm = (props) => {
  return (
    <div className="todo-form">
      <Card
        style={{
          width: '70%',
          padding: '1.5em 1em',
          fontFamily: 'Overlock'
        }}>
        <h1
          style={{
            margin:'0 0 0.5em 0',
            fontFamily:'Zen Loop,cursive',
            fontSize:'2.5em'
          }}
        >New To-Do:</h1>

        <div className="form-card">
          <Input
            placeholder="Title"
            value={props.itemState.newItem.title}
            onChange={props.handleTitleChange}
            className="form-item"
            style={{
              marginBottom:'1em',
              width: '60%',
              marginRight: '5%'
            }}
          />
            <DatePicker
              minDate={new Date()}
              placeholder="Due Date"
              onChange={props.handleDateChange}
              value={props.itemState.newItem.due_date}
              className="form-item"
              id="form-date-picker"
              style={{
                marginBottom:'1em',
                width: '35%'
              }}
            />
          {/* <Input
            placeholder="priority"
            value={props.itemState.newItem.priority}
            onChange={props.handlePriorityChange}
            className="form-item"
          /> */}
          <Textarea
            placeholder="Details"
            value={props.itemState.newItem.content}
            onChange={props.handleContentChange}
            className="form-item"
            style={{
              marginBottom:'1em',
              width: '100%',
              fontFamily: 'Overlock'
            }}
          />
            <CheckboxToggle
              value={props.itemState.newItem.priority}
              onChange={props.handlePriorityChange}
              label="High Priority?"
            />
          <div className="form-button-box">
          <Button
            variant="destructive"
            onClick={props.toggleNewTodoForm}
            label="Cancel"
            className="form-item"
            style={{
              fontFamily: 'Righteous',
              letterSpacing: '0.03em'
            }}
          />
          <Button
            variant="success"
            onClick={props.submitTodo}
            label="Submit To-do"
            className="form-item"
            style={{
              fontFamily: 'Righteous',
              letterSpacing: '0.03em'
            }}
          />
          </div>
        </div>
      </Card>
    </div>
  )
}
export default TodoForm
