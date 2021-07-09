import React, { useEffect } from 'react'
import Login from './Login'
import Todos from './Todos'

const Dashboard = (props) => {
  console.log('dashboard')
  const { userState, fetchUser, itemState } = props
  useEffect(() => {
    // get lists by userID function from dispatch in App.js, when added
  }, [])
  return (
    <div>
      {userState.authenticated ? (
        <div>
          <button onClick={props.logOut}>Log Out</button>
          <h1> Hey, you made it! :D Welcome!</h1>
          {/* <Todos
            itemState={itemState}
            loadTodosForList={props.loadTodosForList}
            submitTodo={props.submitTodo}
            handleContentChange={props.handleContentChange}
            handleTitleChange={props.handleTitleChange}
            handleDateChange={props.handleDateChange}
            handlePriorityChange={props.handlePriorityChange}
            handleDelete={props.handleDelete}
          /> */}
        </div>
      ) : (
        <Login {...props} fetchUser={fetchUser} />
      )}
    </div>
  )
}
export default Dashboard
