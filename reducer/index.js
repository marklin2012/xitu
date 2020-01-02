import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import goldReducer from './gold'
import githubReducer from './github'
import axios from 'axios'

const reducer = combineReducers({
  gold: goldReducer,
  github: githubReducer,
})

export default reducer

// const serverAxios = axios.create({
//   baseURL: 'http://localhost:9090'
// })

// const clientAxios = axios.create({
//   baseURL: '/'
// })

// export const getServerStore = () => {
//   //  服务端用
//   return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)))
// }

// export const getClientStore = () => {
//   // 通过window.__context来获取数据
//   const defaultState = window.__context ? window.__context : {}
//   return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)))
// }
