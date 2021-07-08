import { 
  GetItemsByList
 } from '../../services/ItemService'
import { 
  GET_ITEMS,
  STAGE_ITEM,
  ADD_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  IS_COMPLETED,
  SET_PRIORITY
 } from '../types'

export const LoadItems = (listID) => {
  return async (dispatch) => {
    try {
      const items = await GetItemsByList(listID)
      dispatch({ type: GET_ITEMS, payload: items })
    } catch (error) {
      throw error
    }
  }
}