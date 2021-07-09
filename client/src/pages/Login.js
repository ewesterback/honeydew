import React, {useState} from 'react'
import logo from '../styles/honeydew-logo-bordered.png'


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
      <img src={logo} />
      <div className="welcome">
        <h2>Welcome back, honey!</h2>
        <h3>Let's get dew it.</h3>
      </div>
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
        <div className="button-box">
          <button onClick={logIn}>Log In</button>
        </div>
      </form>
      <footer>
        <br/><a href="/register">Need an account?</a>
      </footer>
    </div>
  )
}
export default Login
