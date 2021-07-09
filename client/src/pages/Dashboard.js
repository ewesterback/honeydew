import React, { useEffect } from 'react'
import Login from './Login'

import List from '../components/List'

const Dashboard = (props) => {
  console.log('dashboard')
  const { userState, fetchUser } = props

  //// map through all lists for current user and display them


  useEffect(() => {
    //// get lists by userID function from dispatch in App.js, when added
  }, [])
  return (
    <div>
      {userState.authenticated ? (
        <div className="dashboard-page">
          <button onClick={props.logOut}>Logout</button>
        <h1> Hey, you made it! 😄 Welcome!</h1>
        
        <ul className="list-display">
          <li><List/></li>
          <li><List/></li>
          <li><List/></li>
        </ul>
        </div>
      ) : (
        <Login {...props} fetchUser={fetchUser} />
      )}
    </div>
  )
}
export default Dashboard
