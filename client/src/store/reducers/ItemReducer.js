const { 
  GET_ITEMS,
  STAGE_ITEM,
  ADD_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  IS_COMPLETED,
  SET_PRIORITY
 } = require('../types')

const iState = {
  items: [],
  newItem: {}
}

const ItemReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload }
    case STAGE_ITEM:
      return {
        ...state,
        newItem: action.payload
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...action.payload }],
        newItem: {}
      }
    case REMOVE_ITEM:
      let index = state.items.findIndex(item=>{if (item.id===action.payload){return true}})
      state.items.splice(index,1)
      break
    case IS_COMPLETED:
      let i=state.items.findIndex(item=>{if (item.id === action.payload.id){return true}})
      state.items[i] = action.payload
      return {...state, items: state.items}
    default:
      return { ...state }
  }
}

export default ItemReducer
