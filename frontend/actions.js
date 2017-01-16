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

export function requestLocalRates () {
  return {
    type: types.REQUEST_LOCAL_RATES
  }
}

export function requestNewRates () {
  return {
    type: types.REQUEST_NEW_RATES
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

export function createRate (exchangeRates) {
  return (dispatch, getState) => {
    $.ajax({
      type: 'POST',
      url: '/api/exchange_rates',
      dataType: 'json',
      data: {exchangeRates},
      success: (data) => {
        debugger
        dispatch(receiveNewRates(data))
      },
      error: (data) => {
        debugger
      }
    })
  }
}

export function fetchLocalRates () {
  return (dispatch, getState) => {

    dispatch(requestLocalRates())

    // add api key in params
    $.ajax({
      type: 'GET',
      url: '/api/exchange_rates',
      dataType: 'json',
      success: (data) => {
        debugger
        dispatch(receiveLocalRates(data))
      },
      error: (data) => {
        debugger
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
    dispatch(requestNewRates())

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
