import './styles/App.css'
import { React, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  LoadItems,
  StageItem,
  AddItem,
  RemoveItem,
  ToggleComplete
} from './store/actions/ItemActions'
import {} from './store/actions/ListActions'
import { 
  LoadUser, 
  SetAuth,
  StageName,
  StageEmail,
  StagePass,
  AddUser
 } from './store/actions/UserActions'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

const mapStateToProps = ({ itemState, listState, userState }) => {
  return { itemState, listState, userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // ITEMS
    fetchItems: (listID) => dispatch(LoadItems(listID)),
    stageItem: (value) => dispatch(StageItem(value)),
    addItem: (item) => dispatch(AddItem(item)),
    removeItem: (itemID) => dispatch(RemoveItem(itemID)),
    toggleComplete: (itemID, status) =>
      dispatch(ToggleComplete(itemID, status)),
    // LISTS
    // USER
    setName: (value) => dispatch(StageName(value)),
    setEmail: (value) => dispatch(StageEmail(value)),
    setPass: (value) => dispatch(StagePass(value)),
    postUser: (regEmail, regPassword, regUsername) =>
      dispatch(AddUser(regEmail,regPassword,regUsername)),
    fetchUser: (loginEmail, loginPassword) =>
      dispatch(LoadUser(loginEmail, loginPassword)),
    setAuth: (bool) => dispatch(SetAuth(bool))
  }
}

function App(props) {
  const history = useHistory()
  const { userState, itemState, listState, postUser, fetchUser } = props

  //// AUTHENTICATION

  const logOut = () => {
    props.setAuth(false)
    localStorage.clear()
    history.push('/')
  }
  const getToken = () => {
    let token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      //return props.setAuth(true)
    }
  }
  const handleUsernameChange = (e) => {
    props.setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    props.setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    props.setPass(e.target.value)
  }

  useEffect(() => {
    getToken()
  }, [])

  return (
    <Switch>
      <Route
        path="/login"
        render={(props) => (
          <Login {...props} 
            userState={userState} 
            fetchUser={fetchUser}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
          />
        )}
      />
      <Route
        path="/register"
        render={(props) => (
          <Register {...props} 
            userState={userState} 
            postUser={postUser}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
            handleUsernameChange={handleUsernameChange}
          />
        )}
      />
      <Route
        exact
        path="/"
        component={(props) => (
          <Dashboard
            {...props}
            userState={userState}
            fetchUser={props.fetchUser}
          />
        )}
      />
    </Switch>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
