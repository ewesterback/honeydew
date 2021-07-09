import { GetListsByUser, CreateList } from '../../services/ListService'
import {
  GET_LISTS,
  STAGE_LIST,
  ADD_LIST,
  CHANGE_LIST,
  REMOVE_LIST,
  SELECT_LIST
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

export const SelectList = (list) => ({
  type: SELECT_LIST,
  payload: list
})

export const AddList = (title) => {
  return async (dispatch) => {
    try {
      const list = await CreateList(title)
      dispatch({ type: ADD_LIST, payload: list })
    } catch (error) {
      throw error
    }
  }
}

// {
//   return (dispatch) => {
//       dispatch({
//         type: SELECT_LIST,
//         payload: list
//       })
//     } catch (error) {
//       throw error
//     }
//   }
// }
