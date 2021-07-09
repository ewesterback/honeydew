import React, { useEffect } from 'react'
import Login from './Login'
import List from '../components/List'

const Dashboard = (props) => {
  const { userState, fetchUser } = props

  //// map through all lists for current user and display them

  useEffect(() => {
    //// get lists by userID function from dispatch in App.js, when added
  }, [])
  return (
    <div>
      {props.userState.authenticated ? (
        <div className="dashboard-page">
        <h1> Hey, you made it! 😄 Welcome!</h1>
        
        <ul className="list-display">
          <li><List/></li>
          <li><List/></li>
          <li><List/></li>
        </ul>
        </div>
      ) : (
        <Login {...props} fetchUser={fetchUser} userState={userState}/>
      )}
    </div>
  )
}
export default Dashboard
