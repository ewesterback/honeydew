const { 
  GET_LISTS,
  STAGE_LIST,
  ADD_LIST,
  CHANGE_LIST,
  REMOVE_LIST
 } = require('../types')

const iState = {
  lists: [],
  newList: {}
}

const ListReducer = (state = iState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return { ...state, lists: action.payload }
    case STAGE_LIST:
      return {
        ...state,
        newList: action.payload
      }
    case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, { ...action.payload }],
        newList: {}
      }
    case REMOVE_LIST:
      let index = state.lists.findIndex(list=>{if (list.id===action.payload){return true}})
      state.lists.splice(index,1)
    default:
      return { ...state }
  }
}

export default ListReducer
