import { createStore } from 'redux'
import { combineReducers } from 'redux'

const initialState = {
  email: null,
  token: null,
  id: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        email: action.payload.email,
        token: action.payload.accessToken,
        id: action.payload.uid
      }
    case 'REMOVE_USER':
      return {
        email: null,
        token: null,
        id: null
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userReducer
})

const store = createStore(rootReducer)

export default store
