import * as types from './constants'
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

export function createRate (exchange_rate) {
  return (dispatch, getState) => {
    $.ajax({
      type: 'POST',
      url: '/api/exchange_rates',
      dataType: 'json',
      data: {exchange_rate},
      success: (data) => {
        dispatch(receiveNewRates(data))
      }
    })
  }
}

export function fetchLocalRates () {
  return (dispatch, getState) => {
    debuggers
    dispatch(types.REQUEST_LOCAL_RATES)
    // add api key in params
    $.ajax({
      type: 'GET',
      url: '/api/exchange_rates',
      dataType: 'json',
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
      type: 'get',
      url: 'https://api.fixer.io/latest?base=USD&callback=?',
      dataType: 'jsonp',
      success: (data) => {
        dispatch(createRate(data))
      },
      error: (data) => {
        dispatch(receiveError(data))
      }
    })
  }
}