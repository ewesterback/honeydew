import React, { useEffect } from 'react'
import Login from './Login'

const Dashboard = (props) => {
  const { userState, fetchUser } = props
  useEffect(() => {
    // get lists by userID function from dispatch in App.js, when added
  }, [])
  return (
    <div>
      {props.userState.authenticated ? (
        <h1> Hey, you made it! :D Welcome!</h1>
      ) : (
        <Login {...props} fetchUser={fetchUser} userState={userState}/>
      )}
    </div>
  )
}
export default Dashboard
