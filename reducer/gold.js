import API from "../service/API"

const Prefix = 'GOLD_'
// type
const FETCH_GOLD = Prefix + 'FETCH_GOLD'

// actions
export const fetchGoldList = query => {
  console.log('fetchGoldList', query)
  return async (dispatch, getState) => {
    console.log('dispatch:', API.getGold)
    const res = await API.getGold(query)
    // console.log('xxx', res.data.data)
    return dispatch({
      type: FETCH_GOLD,
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
    case FETCH_GOLD:
      // console.log('actions', action)
      const newState = {
        ...state,
        list: action.list
      }
      console.log('actions:', newState.list.length)
      return newState
    default:
      return state
  }
}