import API from "../service/API"

const Prefix = 'GOLD_'
// type
const FETCH_GOLD = Prefix + 'FETCH_GOLD'

// actions
export const fetchGoldList = query => {
  return async (dispatch, getState) => {
    const res = await API.getGold(query)
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
      const newState = {
        ...state,
        list: action.list
      }
      return newState
    default:
      return state
  }
}