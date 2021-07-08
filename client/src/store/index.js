import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ListReducer from './reducers/ListReducer'
import ItemReducer from './reducers/ItemReducer'
import UserReducer from './reducers/UserReducer'

const store = createStore(
  combineReducers({
    listState: ListReducer,
    itemState: ItemReducer,
    userState: UserReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))

)

export default store