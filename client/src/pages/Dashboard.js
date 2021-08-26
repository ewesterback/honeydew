import React, { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'
import Todos from './Todos'
import logo from '../styles/honeydew-logo.png'

const Dashboard = (props) => {
  const { userState, fetchUser, itemState, listState, loadListsForUser } = props
  const [newListClicked, setNewListClicked] = useState(false)
  const [newListValue, setNewListValue] = useState('')
  useEffect(() => {
    // get lists by userID function from dispatch in App.js, when added
    loadListsForUser()
  }, [])
  const handleNewListClick = () => {
    setNewListClicked(true)
    //props.createNewList
  }
  const handleNewListInput = (e) => {
    setNewListValue(e.target.value)
  }
  const onSubmit = () => {
    props.createNewList(newListValue)
    setNewListValue('')
    setNewListClicked(false)
  }
  const mappedLists = listState.lists.map((list, i) => (

    <div key={i}>
      {listState.selectedList ? (
        listState.selectedList.id === list.id ? (
          <button
            className="list-button selected-list"
            key={i}
            onClick={() => {
              props.loadTodosForList(list)
            }}
          >
            {list.title}
          </button>
        ) : (
          <button
            className="list-button"
            key={i}
            onClick={() => {
              props.loadTodosForList(list)
            }}
          >
            {list.title}
          </button>
        )
      ) : (
        <button
          className="list-button"
          key={i}
          onClick={() => {
            props.loadTodosForList(list)
          }}
        >
          {list.title}
        </button>
      )}
      {/* {listState.selectedList.id === list.id ? (
        <button
          className="list-button selected-list"
          key={i}
          onClick={() => {
            props.loadTodosForList(list)
          }}
        >
          {list.title}
        </button>
      ) : (
        <button
          className="list-button"
          key={i}
          onClick={() => {
            props.loadTodosForList(list)
          }}
        >
          {list.title}
        </button>
      )} */}
    </div>
  ))
  return (
    <>
      {userState.authenticated ? (
        <div className="dashboard-page">
          <aside>
            <img src={logo} alt="logo" height="80" />
            {/* <button>My Profile</button>
            <hr size="5" width="90%" color="darkmagenta" /> */}
            {mappedLists}
            {newListClicked ? (
              <div>
                <input
                  onChange={handleNewListInput}
                  value={newListValue}
                ></input>
                <button onClick={onSubmit}>Add List</button>
              </div>
            ) : (
              <button className="addlist-button" onClick={handleNewListClick}>
                Add List
              </button>
            )}

            <button className="logout-button" onClick={props.logOut}>
              Log Out
            </button>
          </aside>
          <main>
            {listState.selectedList ? (

              <h1
                style={{
                  fontFamily: 'Zen Loop,cursive',
                  fontSize: '3em',
                  margin: '0 0 0.5em 0'
                }}
              >
                {listState.selectedList.title}
              </h1>
            ) : (
              <h2>Please select a list to see the todos</h2>
            )}
            <Todos
              itemState={itemState}
              listState={listState}
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
        <div>
          <Login {...props} fetchUser={fetchUser} />
          {/* <Register {...props} userState={userState} postUser={postUser} /> */}
        </div>
      )}
    </>
  )
}
export default Dashboard
