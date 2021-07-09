import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import moment from 'moment'

const TodoCard = (props) => {
  return (
    <div className="to-do-card">
      <Card>
        <h2>
          {props.todo.title} | Due {moment(props.todo.dueDate).fromNow()}
        </h2>
        <p>{moment(props.todo.dueDate).format('M-D-YYYY')}</p>
        <p>{props.todo.description}</p>
        <Button
          variant="destructive"
          onClick={() => props.handleDelete(props.todo.id)}
          label="delete"
        />
      </Card>
    </div>
  )
}
export default TodoCard
