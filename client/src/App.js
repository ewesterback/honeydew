import './styles/App.css'
import { React, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import {
  LoadItems,
  StageItem,
  AddItem,
  RemoveItem,
  ToggleComplete,
  ToggleTodoForm
} from './store/actions/ItemActions'
import { LoadLists, SelectList, AddList } from './store/actions/ListActions'
import {
  LoadUser,
  SetAuth,
  // StageName,
  // StageEmail,
  // StagePass,
  AddUser
} from './store/actions/UserActions'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Todos from './pages/Todos'

const mapStateToProps = ({ itemState, listState, userState }) => {
  return { itemState, listState, userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //// ITEMS
    fetchTodos: (listId) => dispatch(LoadItems(listId)),
    handleTodoForm: () => dispatch(ToggleTodoForm()),
    handleFormInput: (inputs) => dispatch(StageItem(inputs)),
    handleSubmit: (body) => dispatch(AddItem(body)),
    deleteTodo: (id) => dispatch(RemoveItem(id)),
    // fetchItems: (listID) => dispatch(LoadItems(listID)),
    // stageItem: (value) => dispatch(StageItem(value)),
    // addItem: (item) => dispatch(AddItem(item)),
    // removeItem: (itemID) => dispatch(RemoveItem(itemID)),
    // toggleComplete: (itemID, status) =>
    //   dispatch(ToggleComplete(itemID, status)),
    //// LISTS
    fetchLists: () => dispatch(LoadLists()),
    selectList: (list) => dispatch(SelectList(list)),
    createList: (title) => dispatch(AddList(title)),
    //// USER
    // setName: (value) => dispatch(StageName(value)),
    // setEmail: (value) => dispatch(StageEmail(value)),
    // setPass: (value) => dispatch(StagePass(value)),
    postUser: (regEmail, regPassword, regUsername) =>
      dispatch(AddUser(regEmail, regPassword, regUsername)),
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
      return props.setAuth(true)
    }
  }
  // const handleUsernameChange = (e) => {
  //   props.setName(e.target.value)
  // }
  // const handleEmailChange = (e) => {
  //   props.setEmail(e.target.value)
  // }
  // const handlePasswordChange = (e) => {
  //   props.setPass(e.target.value)
  // }
  //------------------------------------------------------------
  // list functions
  // ---------------------------------------------------------
  const loadListsForUser = () => {
    props.fetchLists()
  }
  const createNewList = () => {
    props.createList('home improvement')
  }
  //// ---------------------------------------------------------
  //// moved all of todo functions here since it was having issues
  //// --------------------------------------------------------
  const loadTodosForList = (list) => {
    props.selectList(list)
    props.fetchTodos(list.id)
  }
  const toggleNewTodoForm = () => {
    props.handleTodoForm()
  }
  const submitTodo = (event) => {
    event.preventDefault()
    let date = moment(props.itemState.newItem.due_date).format('M-D-YYYY')
    let priority = props.itemState.newItem.priority ? 1 : 2
    console.log(listState.selectedList)
    let reqBody = {
      title: props.itemState.newItem.title,
      content: props.itemState.newItem.content,
      priority: priority,
      due_date: date,
      list_id: props.listState.selectedList.id //CHANGE THIS
    }
    props.handleSubmit(reqBody)
    props.handleTodoForm()
  }
  const handleContentChange = (event) => {
    let modifiedState = { ...itemState.newItem }
    modifiedState.content = event.target.value
    props.handleFormInput(modifiedState)
  }
  const handleTitleChange = (event) => {
    let modifiedState = { ...itemState.newItem }
    modifiedState.title = event.target.value
    props.handleFormInput(modifiedState)
  }
  const handleDateChange = (event) => {
    let modifiedState = { ...itemState.newItem }
    modifiedState.due_date = event
    props.handleFormInput(modifiedState)
  }
  const handlePriorityChange = (event) => {
    let modifiedState = { ...itemState.newItem }
    modifiedState.priority = !modifiedState.priority
    props.handleFormInput(modifiedState)
  }
  const handleDelete = (id) => {
    props.deleteTodo(id)
  }

  //// ---------------------------------------------------------

  useEffect(() => {
    getToken()
  }, [])

  return (
    <Switch>
      <Route
        path="/login"
        render={(props) => (
          <Login
            {...props}
            fetchUser={fetchUser}
            // handleEmailChange={handleEmailChange}
            // handlePasswordChange={handlePasswordChange}
          />
        )}
      />
      <Route
        path="/register"
        render={(props) => (
          <Register
            {...props}
            userState={userState}
            postUser={postUser}
            // handleEmailChange={handleEmailChange}
            // handlePasswordChange={handlePasswordChange}
            // handleUsernameChange={handleUsernameChange}
          />
        )}
      />
      <Route
        exact
        path="/"
        render={(props) => (
          <Dashboard
            {...props}
            userState={userState}
            fetchUser={fetchUser}
            loadListsForUser={loadListsForUser}
            listState={listState}
            logOut={logOut}
            createNewList={createNewList}
            itemState={itemState}
            loadTodosForList={loadTodosForList}
            toggleNewTodoForm={toggleNewTodoForm}
            submitTodo={submitTodo}
            handleContentChange={handleContentChange}
            handleTitleChange={handleTitleChange}
            handleDateChange={handleDateChange}
            handlePriorityChange={handlePriorityChange}
            handleDelete={handleDelete}
          />
        )}
      />
      <Route
        path="/todos"
        render={(props) => (
          <Todos
            {...props}
            itemState={itemState}
            loadTodosForList={loadTodosForList}
            toggleNewTodoForm={toggleNewTodoForm}
            submitTodo={submitTodo}
            handleContentChange={handleContentChange}
            handleTitleChange={handleTitleChange}
            handleDateChange={handleDateChange}
            handlePriorityChange={handlePriorityChange}
            handleDelete={handleDelete}
          />
        )}
      />
    </Switch>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
