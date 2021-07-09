import React from 'react'

const Login = (props) => {
console.log(props)
  const logIn = async (e) => {
    e.preventDefault()
    props.fetchUser(props.userState.email, props.userState.password)
    props.history.push(`/`)
  }

  return (
    <div className="login-page">
      <form className="login-form">
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
        <button onClick={logIn}>Log In</button>
      </form>
      <p id="bottomline">Need an account? <a href="/register">Sign up now!</a></p>
    </div>
  )
}
export default Login
