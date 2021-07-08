import { 
  GetItemsByList,
  PostNewItem,
  SetCompleted,
  SetPriority,
  UpdateItemInfo,
  DeleteItem
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

export const StageTodo = (formValue) => ({
  type: STAGE_ITEM,
  payload: formValue
})

export const AddItem = (newItem) => {
  return async (dispatch) => {
    try {
      const item = await PostNewItem(newItem)
      dispatch({
        type: ADD_ITEM,
        payload: item
      })
    } catch (error) {
      throw error
    }
  }
}

export const RemoveItem = (itemID) => {
  return async (dispatch) => {
    try {
      const item = await DeleteItem(itemID)
      dispatch({ 
        type: REMOVE_ITEM,
        payload: itemID
      })
    } catch (error) {
      throw error
    }
  }
}

export const ToggleComplete = (itemID,status) => {
  return async (dispatch) => {
    try {
      const item = await SetCompleted(itemID,status)
      dispatch({
        type: IS_COMPLETED,
        payload: item
      })
    } catch (error) {
      throw error
    }
  }
}