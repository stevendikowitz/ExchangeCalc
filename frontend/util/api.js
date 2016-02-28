var ApiActions = require('../actions/api');

var ApiUtil = {

 createRate: function (rate) {
   $.ajax({
    type: "post",
    url: "/api/exchange_rates",
    dataType: "json",
    data: { exchange_rate: rate },
    success: function (rates) {
      var rates = [rates]
      ApiActions.receiveRates(rates);
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

      ApiUtil.createRate(eur);
      ApiUtil.createRate(gbp);
    }
  });

 }
};

module.exports = ApiUtil;
