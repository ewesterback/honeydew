import React, {useState} from 'react'

const Register = (props) => {
  // console.log('register')
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
        <div style={{height:'120px',display:'flex',flexFlow:'column',justifyContent:'center',alignItems:'center'}}>
        <button onClick={signUp}>Sign Up</button>
        </div>
      </form>
      <p id="bottomline">
        Already have an account? <a href="/login">Go ahead and log in!</a>
      </p>
    </div>
  )
}
export default Register
