import Immutable from 'immutable'

import * as types from './constants'
import initialState from './initialState'

export function reducer (state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_NEW_RATES:
      state = state.withMutations((state) => {
        state
          .setIn(['rates'], Immutable.fromJS(action.data.rates))
          .setIn(['lastFetch'], Immutable.fromJS(action.data.date))
      })

      break
    case types.RECEIVE_LOCAL_RATES:
      state = state.withMutations((state) => {
        state
          .setIn(['rates'], Immutable.fromJS(action.data.rates))
          .setIn(['lastFetch'], Immutable.fromJS(action.data.date))
      })

      break
    case types.RECEIVE_UPDATE_VALUE:
      state = state.setIn([action.id], action.value)
      break
    default:
  }

  return state
}
