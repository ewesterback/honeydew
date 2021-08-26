import React from 'react'
import { Card, Button } from 'react-rainbow-components'
import moment from 'moment'
import honeydew1 from '../styles/honeydew1.png'
import honeydewslice from '../styles/honeydewslice.png'

const TodoCard = (props) => {
  const priorityCheck = () => {
    switch (props.todo.priority) {
      case 1:
          <img src={honeydew1} />
        break;
      case 2:
        break;
      case 3:
        <img src={honeydewslice} />
        break;
      default:
        break;
    }
  }
  return (
    <div className="to-do-card">
      <Card
        style={{
          fontFamily: 'Overlock',
          padding: '1em 1em'
        }}>
        <topper>
          <h2>
            {props.todo.title}
          </h2>
          <h4>
            Due {moment(props.todo.due_date).fromNow()}
          </h4>
        </topper>
        <p>{priorityCheck}</p>
        <p style={{fontFamily:'Zen Loop,cursive',margin:'0',fontSize:'1.3em',textAlign:'right'}}>{moment(props.todo.due_date).format('M-D-YYYY')}</p>
        <p style={{textAlign:'justify'}}>{props.todo.content}</p>
        <Button
          variant="destructive"
          onClick={() => props.handleDelete(props.todo.id)}
          label="Delete"
          size="small"
          style={{
            fontFamily:'Righteous, cursive',
            letterSpacing:'0.03em'
          }}
        />
      </Card>
    </div>
  )
}
export default TodoCard
