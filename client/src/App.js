import './styles/App.css'
import { React, useEffect } from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  LoadItems,
  StageTodo,
  AddItem,
  RemoveItem,
  ToggleComplete
} from './store/actions/ItemActions'
import {} from './store/actions/ListActions'
import {} from './store/actions/UserActions'
import Login from './pages/Login'
import Register from './pages/Register'

const mapStateToProps = ({ itemState, listState, userState }) => {
  return { itemState, listState, userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: (listID)=> dispatch(LoadItems(listID)),
    stageItem: (value) => dispatch(StageTodo(value)),
    addItem: (item)=> dispatch(AddItem(item)),
    removeItem: (itemID)=> dispatch(RemoveItem(itemID)),
    toggleComplete: (itemID,status) => dispatch(ToggleComplete(itemID,status))
  }
}


function App(props) {
  // functions will go here
  useEffect(()=>{
    // get lists by userID function from dispatch, when added
  },[])
  
  return (
    <div className="App">
      hi i'm an app
      <Login/>
      <Register/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
