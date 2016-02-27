var AppDispatcher = require('../dispatcher/dispatcher'),
    ExchangeConstants = require('../constants/exchange');

var ApiActions = {
  receiveRates: function (rates) {
    AppDispatcher.dispatch({
      actionType: ExchangeConstants.RATES_RECEIVED,
      rates: rates
    });
  }
};

module.exports = ApiActions;
