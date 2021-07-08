import { 
  GetUserById
 } from '../../services/UserService'
import { 
  GET_USER,
  CHANGE_USER_INFO,
  REMOVE_USER
 } from '../types'

export const LoadUser = (id) => {
  return async (dispatch) => {
    try {
      const user = await GetUserById(id)
      dispatch({ type: GET_USER, payload: user })
    } catch (error) {
      throw error
    }
  }
}