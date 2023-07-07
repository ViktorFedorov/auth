import {createStore} from 'redux'
import {combineReducers} from 'redux'

const initialState = {
  email: null,
  token: null,
  id: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        email: action.payload.email
      }
    case 'REMOVE_USER':
      return 2
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userReducer
})

const store = createStore(rootReducer)

export default store