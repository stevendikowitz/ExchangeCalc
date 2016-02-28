# ExchangeCalc

![exchangecalc]

[ExchangeCalc][live-site] is a mini currency exchange rate app I built using Ruby on Rails and React.


## Overall Structure
### Back end
The app was built using Ruby on Rails on the back end with a postgreSQL database. Back end structure is RESTful and all the data requests use AJAX and are fulfilled with a JSON API.

Every 24 hours, ExchangeCalc fetches the current currency exchange rates and posts them to the database. ExchangeCalc uses [BitcoinAverage integration API][bitcoin] for Bitcoin exchange rates and [Fixer.io][fixer] for all others.


### Front end
The front end is built completely in React.js and JavaScript and utilizes React's Flux architecture.



[exchangecalc]: ./app/assets/images/exchangecalc.png
[live-site]:https://exchangecalc.herokuapp.com
[bitcoin]:https://bitcoinaverage.com/api
[fixer]:http://fixer.io/
