import React, { useEffect } from 'react'
import Login from './Login'
import Todos from './Todos'
import logo from '../styles/honeydew-logo.png'

const Dashboard = (props) => {
  console.log('dashboard')
  const { userState, fetchUser, itemState, listState, loadListsForUser } = props
  useEffect(() => {
    // get lists by userID function from dispatch in App.js, when added
    loadListsForUser()
  }, [])
  const mappedLists = listState.lists.map((list, i) => (
    <div className="list-button-box">
      <button
        className="list-button"
        key={i}
        onClick={() => {
          props.loadTodosForList(list)
        }}
      >
        {list.title}
      </button>
    </div>
  ))
  return (
    <>
      {userState.authenticated ? (
        <div className="dashboard-page">
          <aside>
            <img src={logo} alt="logo" height="80" />
            <button>My Profile</button>
            
            {mappedLists}
            <button className="addlist-button" onClick={props.createNewList}>Add List</button>
            <button className="logout-button" onClick={props.logOut}>
              Log Out
            </button>
          </aside>
          <main>
            {listState.selectedList ? (
              <h1 style={{fontFamily:'Zen Loop,cursive',fontSize:'3em',margin:'0.5em 0 0.5em 0'}}>{listState.selectedList.title}</h1>
            ) : (
              <h1>Please Select a list to see the todos</h1>
            )}
            <Todos
              itemState={itemState}
              loadTodosForList={props.loadTodosForList}
              toggleNewTodoForm={props.toggleNewTodoForm}
              submitTodo={props.submitTodo}
              handleContentChange={props.handleContentChange}
              handleTitleChange={props.handleTitleChange}
              handleDateChange={props.handleDateChange}
              handlePriorityChange={props.handlePriorityChange}
              handleDelete={props.handleDelete}
            />
            
          </main>
        </div>
      ) : (
        <Login {...props} fetchUser={fetchUser} />
      )}
    </>
  )
}
export default Dashboard
