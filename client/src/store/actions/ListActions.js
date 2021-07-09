import { GetListsByUser } from '../../services/ListService'
import {
  GET_LISTS,
  STAGE_LIST,
  ADD_LIST,
  CHANGE_LIST,
  REMOVE_LIST
} from '../types'

export const LoadLists = () => {
  return async (dispatch) => {
    try {
      const lists = await GetListsByUser()
      dispatch({ type: GET_LISTS, payload: lists })
    } catch (error) {
      throw error
    }
  }
}
