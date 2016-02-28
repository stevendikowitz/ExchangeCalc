var Store = require('flux/utils').Store;

var AppDispatcher = require('../dispatcher/dispatcher'),
    ExchangeConstants = require('../constants/exchange');

var _exchangeRates = [],
    _exchangeRatesIdx = {};

var ExchangeStore = new Store(AppDispatcher);

var resetRates = function (rates) {
  _exchangeRates = rates;
  _exchangeRatesIdx = {};
  rates.forEach(function(rate) {
    _exchangeRatesIdx[rate.id] = rate;
  });

};

ExchangeStore.all = function () {
  return _exchangeRates.slice();
};

ExchangeStore.find = function (id) {
  return _exchangeRatesIdx[id];
};

ExchangeStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ExchangeConstants.RATES_RECEIVED:
      resetRates(payload.rates);
      ExchangeStore.__emitChange();
      break;
  }
};


module.exports = ExchangeStore;
