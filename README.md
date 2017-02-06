# ExchangeCalc

![exchangecalc]

[ExchangeCalc][live-site] is a mini currency exchange rate app I built using Ruby on Rails and React.


## Overall Structure
### Back end
The app was built using Ruby on Rails on the back end with a postgreSQL database. Back end structure is RESTful and all the data requests use AJAX and are fulfilled with a JSON API.

Every 24 hours, ExchangeCalc fetches the current currency exchange rates and posts them to the database. ExchangeCalc uses [Fixer.io][fixer] for all exchange rates.


### Front end
The front end is built completely in React.js and JavaScript and utilizes [Redux][redux] architecture.



[exchangecalc]: ./app/assets/images/exchangecalculator.png
[live-site]:https://exchangecalc.herokuapp.com
[fixer]:http://fixer.io/
[redux]: https://github.com/reactjs/redux
