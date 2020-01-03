import { combineReducers } from 'redux'
import goldReducer from './gold'
import githubReducer from './github'

const reducer = combineReducers({
  gold: goldReducer,
  github: githubReducer,
})

export default reducer

