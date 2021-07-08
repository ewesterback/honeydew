const { 
  GET_USER,
  CHANGE_USER_INFO,
  REMOVE_USER
 } = require('../types')

const iState = {
  user: {}
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    
    default:
      return { ...state }
  }
}

export default UserReducer
