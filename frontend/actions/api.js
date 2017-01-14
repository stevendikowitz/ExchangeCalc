const AppDispatcher = require('../dispatcher/dispatcher')
const ExchangeConstants = require('../constants/exchange')

// For our app, theres only one action: receiveRates. This will tell our dispatch our data to the ExchangeStore and update its contents.

export const ApiActions = {
  receiveRates: function (rates) {
    AppDispatcher.dispatch({
      actionType: ExchangeConstants.RATES_RECEIVED,
      rates
    })
  }
}