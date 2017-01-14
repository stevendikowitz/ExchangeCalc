import Immutable from 'immutable'

import * as types from './constants/exchange'
import initialState from './initialState'

export function reducer (state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_NEW_RATES:
      state = state.setIn(['rates'], Immutable.fromJS(action.data))

      break
    case types.RECEIVE_LOCAL_RATES:
      state = state.setIn(['rates'], Immutable.fromJS(action.data))

      break
    case types.RECEIVE_UPDATE_VALUE:
      // state = state.setIn(['notifications'], Immutable.fromJS({class: types.ERROR_CLASS, message: 'Updating your information, one moment please...'}))

      break
    default:
  }

  return reducer
}
