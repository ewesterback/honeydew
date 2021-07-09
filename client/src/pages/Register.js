import React from 'react'



const Register = (props) => {

  const signUp = async (e) => {
    e.preventDefault()
    props.postUser(props.userState.username, props.userState.email, props.userState.password)
    props.history.push(`/`)
  }

  return(
    <div className="signup-page">
      <form className="signup-form">
      <input
          type="username"
          value={props.userState.username}
          onChange={props.handleUsernameChange}
          placeholder="Username"
        />
        <input
          type="email"
          value={props.userState.email}
          onChange={props.handleEmailChange}
          placeholder="Email"
        />
        <input
          type="password"
          value={props.userState.password}
          onChange={props.handlePasswordChange}
          placeholder="Password"
        />
        <button onClick={signUp}>Sign Up</button>
      </form>
      <p id="bottomline">
        Already have an account? 
        <a href="/login">Go ahead and log in!</a></p>
    </div>
  )
}
export default Register