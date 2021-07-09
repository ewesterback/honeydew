import React, {useState} from 'react'

const Login = (props) => {
  // console.log('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const logIn = async (e) => {
    e.preventDefault()
    console.log(e.target.value)
    props.fetchUser(email, password)
    props.history.push(`/`)
  }

  return (
    <div className="login-page">
      <form className="login-form">
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
        <button onClick={logIn}>Log In</button>
      </form>
      <p id="bottomline">
        Need an account? <a href="/register">Sign up now!</a>
      </p>
    </div>
  )
}
export default Login
