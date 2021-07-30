import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import moment from 'moment'
import honeydew1 from '../styles/honeydew1.png'
import honeydewslice from '../styles/honeydewslice.png'

const TodoCard = (props) => {
  return (
    <div className="to-do-card">
      <Card
        style={{
          fontFamily: 'Overlock',
          padding: '1em 1em'
        }}
      >
        <div className="topper">
          <h2>{props.todo.title} </h2>
          {props.todo.priority === '1' ? (
            <h2 className="high-priority">!</h2>
          ) : null}
          <h4>Due {moment(props.todo.due_date).fromNow()}</h4>
        </div>
        {/* <p>{priorityCheck}</p> */}
        <p
          style={{
            fontFamily: 'Zen Loop,cursive',
            margin: '0',
            fontSize: '1.3em',
            textAlign: 'right'
          }}
        >
          {moment(props.todo.due_date).format('M-D-YYYY')}
        </p>
        <p style={{ textAlign: 'justify' }}>{props.todo.content}</p>
        <Button
          variant="destructive"
          onClick={() => props.handleDelete(props.todo.id)}
          label="Delete"
          size="small"
          style={{
            fontFamily: 'Righteous, cursive',
            letterSpacing: '0.03em'
          }}
        />
      </Card>
    </div>
  )
}
export default TodoCard
