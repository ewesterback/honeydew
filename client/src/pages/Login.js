import React, { useState } from 'react'



const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const logIn= async (e) => {
    e.preventDefault()
    props.fetchUser(email,password)
    props.history.push(`/`)
  }

  return(
    <div>
      <form>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
        />
        <button onClick={logIn}>
          Log In
        </button>
      </form>
    </div>
  )
}
export default Login