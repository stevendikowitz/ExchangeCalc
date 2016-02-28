var Store = require('flux/utils').Store;

var AppDispatcher = require('../dispatcher/dispatcher'),
    ExchangeConstants = require('../constants/exchange');

var _exchangeRates = [],
    _exchangeRatesIdx = {},
    ExchangeStore = new Store(AppDispatcher);

var resetRates = function (rates) {
  _exchangeRates = rates;
  _exchangeRatesIdx = {};
  rates.forEach(function(rate) {
    _exchangeRatesIdx[rate.id] = rate;
  });

};

// Returns all contents of the store
ExchangeStore.all = function () {
  return _exchangeRates.slice();
};

// I always find it useful to save the contents in two containers, one of which is an array, and the other an object. Its much easier and computationally efficient to find an item in an object when you have its correspoding key. Here, its the item's id.
ExchangeStore.find = function (id) {
  return _exchangeRatesIdx[id];
};

// The ExchangeStore receives the payload from the dispatcher when a change event occurs. Here, the ask the payload if the change is relevant to us, and if it is, we act accordingly. In this case, we receive rates and reset the old contents of the store with them.
ExchangeStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ExchangeConstants.RATES_RECEIVED:
      resetRates(payload.rates);
      ExchangeStore.__emitChange();
      break;
  }
};


module.exports = ExchangeStore;
