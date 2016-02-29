var React = require('react'),
    ReactDOM = require('react-dom'),
    ExchangeStore = require('./stores/exchange'),
    ApiUtil  = require('./util/api'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var Calc = React.createClass({

  // I like to use this mixin so that whatever is in an input at any point in time is recorded in state. Here, I'm using this mixin for the amount the user wants to covert.
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      rates: ExchangeStore.all(), amount: "", from: "BTC", to: "BTC"
    };
  },

  componentDidMount: function () {
    // First, let's fetch the most recent rates in the database.
    ApiUtil.fetchLocalRates();

    // Add a listener to the store so we know when it changes. When it does change, we can rerender to have the newest store data on the page.
    this.storeListener = ExchangeStore.addListener(this.onChange);
  },

  onChange: function () {
    this.state.rates = ExchangeStore.all();
    // If rates are old or there are no rates in the database, fetch new ones.
    if ( this.state.rates.length < 3 || this.outdatedFetch() ) {
      ApiUtil.fetchRates();
    }
  },

  outdatedFetch: function () {
    // Math required to make sure we only fetch new exchange rates once a day.
    var rateDate = new Date(this.state.rates[0].created_at);
    var currentDate = new Date(Date.now());
    var msecDiff = currentDate - rateDate;
    var hoursDiff = Math.floor(msecDiff / 1000 / 60 / 60);

    // Fetches updated currency exchange info if last entries in database we fetched longer than or equal to 24 hours ago.
    return ( hoursDiff >= 24 ) ? true : false;
    // return true;
  },

  componentWillUnmount: function () {

    // When component unmounts, we remove the listener from the store. No need for it when the component is not around.
    this.storeListener.remove();
  },

  onFromSelect: function (e) {

    // User selects from currency.
    this.setState({from: e.target.value});
  },

  onToSelect: function (e) {

    // User selects to currency.
    this.setState({to: e.target.value});
  },

  convert: function (e) {
    e.preventDefault();
    var fromCur = this.state.from,
        toCur = this.state.to,
        amount = parseFloat(this.state.amount),
        fromRate = 1, toRate = 1, value;

    // No NaNs on my watch!
    if (this.state.amount === "") amount = 0;
    if (this.state.amount % 1 !== 0) {
      return this.setState({value: "Not a valid amount Please enter a number.", amount: "", type: null});
    }

    // Iterate through each rate we have and set the local variables toRate and fromRate accordingly.
    this.state.rates.forEach(function(rate) {
      var currency = rate.currency;
      if (currency === fromCur) {
        fromRate = parseFloat(rate.rate);
      } else if (currency === toCur) {
        toRate = parseFloat(rate.rate);
      }
    });

    // If 'to' and 'from' are equivalent, just return the original amount because no conversion is necessary.
    if (fromCur === toCur) {
      return this.setState({value: amount.toFixed(2), type: toCur});
    }

    // I have to do this check because of the BTC API I used and because putting such a small fraction in the database with a precision constraint of 2 did not work well.
    //
    if (fromCur === "BTC") {
        fromRate = 1 / fromRate;
      }
    if (toCur === "BTC") {
      toRate = 1 / toRate;
    }

    // This is the meat of the entire function. Every exchange rate is in respect to USD, so we need to essentially convert it to USD using the first half of the equation, and then convert it into the desired 'to' currency.
    var value = (amount * (1 / fromRate )) * (toRate);
    this.setState({value: value.toFixed(2), type: toCur});

  },

  currencyType: function () {
    var type = this.state.type;
    if (!type) return;

    // I'm cheating here and using the unicode character for Thai Baht because Bitcoin doesn't have an official one yet.
    if (type === "EUR") return <span>&#8364; </span>;
    else if (type === "GBP") return <span>&#163; </span>;
    else if (type === "BTC") return <span>&#3647; </span>;
    else if (type === "USD") return <span>$ </span>;
  },


  render: function () {
    var value = this.state.value,
        converted;

    // If the user has converted something, let's render it.
    if ( value ) {
      var type = this.currencyType();
      converted = <div className="currency">{type} {value}</div>;
    }

    return (
      <div>
        <header className="header">
            <h1 className="">Currency Calculator</h1>
            <ul className="links group">
              <li>
                <a
                  href="https://github.com/stevendikowitz/ExchangeCalc"
                  target="_blank">
                  GitHub Repo
                </a>
              </li>
              <li>
                <a href="http://stevendikowitz.com/" target="_blank">stevendikowitz.com</a>
              </li>
            </ul>
        </header>

        <section className="content">
          <form className="" onSubmit={ this.convert }>
            <div className="input-field group">
              <div className="input">
                <label>From</label>
                <select onChange={this.onFromSelect}>
                  <option value="BTC">BTC</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="USD">USD</option>
                </select>
                </div>

                <div className="input">
                <label>To</label>
                <select onChange={this.onToSelect}>
                  <option value="BTC">BTC</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="USD">USD</option>
                </select>
              </div>

              <div className="input">
                <label className="">Amount to Convert</label>
                <input
                  type="text"
                  placeholder="Enter amount"
                  valueLink={this.linkState('amount')} />
              </div>
            </div>
            <button className="submit">convert</button>
          </form>
        {converted}
        </section>
      </div>
    );
  }
});


window.init = function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Calc/>, root);
};
