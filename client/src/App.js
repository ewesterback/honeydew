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
import { LoadUser, SetAuth } from './store/actions/UserActions'
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
    fetchUser: (loginEmail, loginPassword) =>
      dispatch(LoadUser(loginEmail, loginPassword)),
    setAuth: (bool) => dispatch(SetAuth(bool))
  }
}

function App(props) {
  const history = useHistory()
  const { userState, itemState, listState } = props

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
  useEffect(() => {
    getToken()
  }, [])

  return (
    <Switch>
      <Route
        path="/login"
        component={(props) => (
          <Login {...props} userState={userState} fetchUser={props.fetchUser} />
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
      <Register />
    </Switch>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
