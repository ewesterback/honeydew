const {
  GET_USER,
  SET_AUTH,
  // STAGE_PW,
  // STAGE_NAME,
  // STAGE_EMAIL,
  ADD_NEW_USER,
  CHANGE_USER_INFO,
  REMOVE_USER
} = require('../types')

const iState = {
  user: {},
  authenticated: false
  // username: '',
  // email: '',
  // password: ''
}

const UserReducer = (state = iState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state
        // username: '',
        // email: '',
        // password: ''
      }
    case GET_USER:
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        user: action.payload,
        authenticated: true
        // username: '',
        // email: '',
        // password: ''
      }
    case SET_AUTH:
      return { ...state, authenticated: action.payload }
    default:
      return { ...state }
  }
}

export default UserReducer
