import React, {useEffect} from 'react'
import Login from './Login'



const Dashboard = (props) => {
  const {userState} = props
  useEffect(()=>{
    // get lists by userID function from dispatch in App.js, when added
  },[])
  return(
    <div>
      {userState.authenticated ? (
        <h1> Hey, you made it! :D Welcome!</h1>
      ) : (
        <Login {...props}/>
      )}
    </div>
  )
}
export default Dashboard