const {
  GET_ITEMS,
  STAGE_ITEM,
  ADD_ITEM,
  CHANGE_ITEM,
  REMOVE_ITEM,
  IS_COMPLETED,
  SET_PRIORITY,
  TOGGLE_TODO_FORM
} = require('../types')

const iState = {
  items: [],
  newItem: {
    title: '',
    content: '',
    priority: '',
    due_date: '',
    list_id: ''
  },
  openTodoForm: false
}

const ItemReducer = (state = iState, action) => {
  switch (action.type) {
    //GET_TODOS
    case GET_ITEMS:
      return { ...state, items: action.payload }
    //similar to new content, title, etc, just done in one object
    case STAGE_ITEM:
      console.log(action.payload)
      return {
        ...state,
        newItem: action.payload
      }
    //CREATE_TODO
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, { ...action.payload }]
        // newItem: {
        //   title: '',
        //   content: '',
        //   priority: '',
        //   due_date: '',
        //   list_id: ''
        // }
      }
    case TOGGLE_TODO_FORM:
      return {
        ...state,
        openTodoForm: !state.openTodoForm,
        newItem: {
          title: '',
          content: '',
          priority: '',
          due_date: '',
          list_id: ''
        }
      }
    case REMOVE_ITEM: //DELETE_TODO
      // can also use filter
      // todos: state.todos.filter((todo) => todo.id !== action.payload.item)
      let index = state.items.findIndex((item) => {
        if (item.id === action.payload) {
          return true
        }
      })
      state.items.splice(index, 1)
      break
    case IS_COMPLETED:
      let i = state.items.findIndex((item) => {
        if (item.id === action.payload.id) {
          return true
        }
      })
      state.items[i] = action.payload
      return { ...state, items: state.items }
    default:
      return { ...state }
  }
}

export default ItemReducer
