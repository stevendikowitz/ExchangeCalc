var ApiActions = require('../actions/api');

var ApiUtil = {
  // The ApiUtil handles all our API requests. In success, we pass the data we pass data to our ApiActions which then tells our Dispatcher to do something with the data.

 createRate: function (rate) {
   $.ajax({
    type: "post",
    url: "/api/exchange_rates",
    dataType: "json",
    data: { exchange_rate: rate },
    success: function (rate) {
      // Here I'm wrapping this rate in brackets so I can use forEach on it later.
      var rate = [rate];

      ApiActions.receiveRates(rate);
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
    url: "http://api.fixer.io/latest?base=USD",
    dataType: "json",
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
