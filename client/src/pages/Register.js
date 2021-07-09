import React, {useState} from 'react'
import logo from '../styles/honeydew-logo-bordered.png'


const Register = (props) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const signUp = async (e) => {
    e.preventDefault()
    props.postUser(
      email,
      password,
      username
    )
    props.history.push(`/`)
  }

  return (
    <div className="signup-page">
      <img src={logo} />
      <div className="intro">
        <p>Need somewhere to track your "honey-do's"?
        <br/><span className="title">Honeydew</span> is sweet— but not too sweet,
        <br/>with only the bells and whistles you need.</p>
      </div>
      <form className="signup-form">
        <input
          type="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Username"
        />
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
        <button onClick={signUp}>Sign Up</button>
        </div>
      </form>
      <footer>
        <a href="/login">Already have an account?</a>
      </footer>
    </div>
  )
}
export default Register
