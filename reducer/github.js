import API from "../service/API"

const Prefix = 'Github_'
// type
const FETCH_Github = Prefix + 'FETCH_Github'

// actions
export const fetchGithubList = query => {
  console.log('fetchGithubList', query)
  return async (dispatch, getState) => {
    const res = await API.getGithub(query)
    console.log('xxx', res.data.data)
    return dispatch({
      type: FETCH_Github,
      list: res.data.data,
    })
  }
}

// state
const defaultState = {
  list: []
}

// reducer
export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_Github:
      // console.log('actions', action)
      const newState = {
        ...state,
        list: action.list
      }
      return newState
    default:
      return state
  }
}