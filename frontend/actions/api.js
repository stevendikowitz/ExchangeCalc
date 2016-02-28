var AppDispatcher = require('../dispatcher/dispatcher'),
    ExchangeConstants = require('../constants/exchange');

// For our app, theres only one action: receiveRates. This will tell our dispatch our data to the ExchangeStore and update its contents.

var ApiActions = {
  receiveRates: function (rates) {
    AppDispatcher.dispatch({
      actionType: ExchangeConstants.RATES_RECEIVED,
      rates: rates
    });
  }
};

module.exports = ApiActions;
