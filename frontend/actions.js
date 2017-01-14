import * as types from './constants/exchange'
import $ from 'jquery'

export function receiveError (data) {
  if (__DEV__) {
    console.debug('[ACTION] receiveError', data)  // eslint-disable-line
  }

  return {
    type: types.RECEIVE_ERROR,
    data
  }
}

export function receiveLocalRates (data) {
  return {
    type: types.RECEIVE_LOCAL_RATES,
    data
  }
}

export function receiveNewRates (data) {
  return {
    type: types.RECEIVE_NEW_RATES,
    data
  }
}

export function fetchLocalRates () {
  return (dispatch, getState) => {
    dispatch(types.REQUEST_LOCAL_RATES)
    // add api key in params
    $.ajax({
      method: 'GET',
      url: '',
      dataType: 'json',
      data: JSON.stringify(member),
      contentType: 'application/json; charset=utf-8',
      success: (data) => {
        dispatch(receiveLocalRates(data))
      },
      error: (data) => {
        dispatch(receiveError(data))
      }
    })
  }
}

export function updateValue (target, value) {
  return {
    type: types.RECEIVE_UPDATE_VALUE,
    target,
    value
  }
}

export function fetchNewRates () {
  return (dispatch, getState) => {
    dispatch(types.REQUEST_NEW_RATES)

    $.ajax({
      method: 'get',
      url: '',
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: (data) => {
        dispatch(receiveNewRates(data))
      },
      error: (data) => {
        dispatch(receiveError(data))
      }
    })
  }
}