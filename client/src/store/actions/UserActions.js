import { 
  GetUserByLogin
 } from '../../services/UserService'
import { 
  GET_USER,
  SET_AUTH,
  CHANGE_USER_INFO,
  REMOVE_USER
 } from '../types'

export const LoadUser = (loginEmail, loginPassword) => {
  return async (dispatch) => {
    try {
      const user = await GetUserByLogin(loginEmail, loginPassword)
      dispatch({ type: GET_USER, payload: user })
    } catch (error) {
      throw error
    }
  }
}

export const SetAuth = (bool) => ({
  type: SET_AUTH,
  payload: bool
})