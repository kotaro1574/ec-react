import {
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux'

// Import reducers
import { UsersReducer } from '../users/reducers'

export default function createStore() {
  return reduxCreateStore( // reduxのcreateStoreメソッドの別名
    combineReducers({
      users: UsersReducer,
    })
  )
}
