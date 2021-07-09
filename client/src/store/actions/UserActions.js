import { 
  GetUserByLogin,
  PostNewUser
 } from '../../services/UserService'
import { 
  GET_USER,
  SET_AUTH,
  STAGE_EMAIL,
  STAGE_NAME,
  STAGE_PW,
  ADD_NEW_USER,
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

export const StageName = (username) => ({
  type: STAGE_NAME,
  payload: username
})

export const StageEmail = (email) => ({
  type: STAGE_EMAIL,
  payload: email
})

export const StagePass = (pass) => ({
  type: STAGE_PW,
  payload: pass
})

export const AddUser = (regEmail, regPassword, regUsername) => {
  return async (dispatch) => {
    try {
      await PostNewUser(regEmail, regPassword, regUsername)
      dispatch({ type: ADD_NEW_USER })
    } catch (error) {
      throw error
    }
  }
}