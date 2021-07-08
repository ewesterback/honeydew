const { 
  GET_USER,
  SET_AUTH,
  CHANGE_USER_INFO,
  REMOVE_USER
 } = require('../types')

const iState = {
  user: {},
  authenticated: false,
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_USER:
      localStorage.setItem('token', action.payload.token)
      return { 
        ...state, 
        user: action.payload,
        authenticated: true
      }
    case SET_AUTH:
      return {...state, authenticated: action.payload}
    default:
      return { ...state }
  }
}

export default UserReducer
