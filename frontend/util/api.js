var ApiActions = require('../actions/api');


var _rates = [];
var ApiUtil = {
  // The ApiUtil handles all our API requests. In success, we pass the data we pass data to our ApiActions which then tells our Dispatcher to do something with the data.

 createRate: function (rate) {
   $.ajax({
    type: "post",
    url: "/api/exchange_rates",
    dataType: "json",
    data: { exchange_rate: rate },
    success: function (rate) {
      // Here I'm pushing the rates into the _rates array.
      _rates.push(rate);

      // I need to wait until all three currency rates are fetched (no need to fetch USD since every other rate is in relation to USD) before adding them to the store. The reason is that the listener will see  tell the component that something has changed in the store each time a new rate is entered but this causes problems because it would tell ApiUtil to fire off a new ajax request while its in the process of firing one.
      if (_rates.length === 3) {
        ApiActions.receiveRates(_rates);
        _rates = [];
      }
    }
  });
},

fetchLocalRates: function () {
  $.ajax({
   type: "get",
   url: "/api/exchange_rates",
   dataType: "json",
   success: function (rates) {
     ApiActions.receiveRates(rates);
   }
 });
},

 fetchRates: function () {

   $.ajax({
    type: "get",
    url: "https://api.bitcoinaverage.com/exchanges/USD",
    dataType: "json",
    success: function (rate) {
      var rate = {
        currency: "BTC",
        rate:  rate.bitex.rates.last,
        date: rate.timestamp
      };

    // Didn't know where to get BTC and the other currency exchange rates in one place, so I have to make ajax requests to two different APIs.

      ApiUtil.createRate(rate);
    }
  });

   $.ajax({
    type: "get",
    url: "https://api.fixer.io/latest?base=USD&callback=?",
    dataType: "jsonp",
    success: function (rates) {
      var date = rates.date;

      var eur = {
        date: date,
        currency: "EUR",
        rate: rates.rates.EUR
      };

      var gbp = {
        date: date,
        currency: "GBP",
        rate: rates.rates.GBP
      };

      // We just fetched a bunch of rates from this API but we only care about EUR, GBP. So instead of posting all of this extra data unecessarily to our databse, we can pull out just the EUR and GBP rates and make a post request for them.

      ApiUtil.createRate(eur);
      ApiUtil.createRate(gbp);
    }
  });

 }
};

module.exports = ApiUtil;
