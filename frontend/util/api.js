var ApiActions = require('../actions/api');

var ApiUtil = {
  fetchRates: function () {
    $.ajax({
     type: "get",
     url: "/api/exchange_rates",
     dataType: "json",
     success: function (rates) {
       ApiActions.receiveRates(rates);
     }
   });
 },

 fetchLocalRates: function () {
   $.ajax({
    type: "get",
    url: "http://api.fixer.io/latest?base=USD",
    dataType: "json",
    success: function (rates) {
      ApiActions.receiveRates(rates);
    }
  });
 }
};

module.exports = ApiUtil;
