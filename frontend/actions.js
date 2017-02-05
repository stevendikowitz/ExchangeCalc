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
  if (__DEV__) {
    console.debug('[ACTION] requestLocalRates')  // eslint-disable-line
  }

  return {
    type: types.REQUEST_LOCAL_RATES
  }
}

export function requestNewRates () {
  if (__DEV__) {
    console.debug('[ACTION] requestNewRates')  // eslint-disable-line
  }

  return {
    type: types.REQUEST_NEW_RATES
  }
}

export function clearNotification () {
  return {
    type: types.CLEAR_NOTIFICATION
  }
}

export function receiveLocalRates (data) {
  if (__DEV__) {
    console.debug('[ACTION] receiveLocalRates', data)  // eslint-disable-line
  }

  return {
    type: types.RECEIVE_LOCAL_RATES,
    data
  }
}

export function receiveNewRates (data) {
  if (__DEV__) {
    console.debug('[ACTION] receiveNewRates', data)  // eslint-disable-line
  }

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
        data.rates.USD = '1.00'
        dispatch(receiveNewRates(data))
      },
      error: (data) => {
        dispatch(receiveError(data))
      }
    })
  }
}

export function fetchLocalRates () {
  return (dispatch, getState) => {
    dispatch(requestLocalRates())

    $.ajax({
      type: 'GET',
      url: '/api/exchange_rates',
      dataType: 'json',
      success: (data) => {
        data.rates.USD = '1.00'
        dispatch(receiveLocalRates(data))
      },
      error: (data) => {
        dispatch(receiveError(data))
      }
    })
  }
}

export function updateValue (id, value) {
  return {
    type: types.RECEIVE_UPDATE_VALUE,
    id,
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
        const exchangeRates = Object.assign({}, data.rates, {
          date: new Date()
        })

        dispatch(createRate(exchangeRates))
      },
      error: (data) => {
        dispatch(receiveError(data))
      }
    })
  }
}
