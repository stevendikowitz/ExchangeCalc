var React = require('react'),
    ReactDOM = require('react-dom'),
    ExchangeStore = require('./stores/exchange'),
    ApiUtil  = require('./util/api'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');


var Calc = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      rates: ExchangeStore.all(), amount: 0
    };
  },

  componentDidMount: function () {
    ApiUtil.fetchLocalRates();
    var rates = ExchangeStore.all();

    if ( typeof rates["usd"] === "undefined" ) {
      ApiUtil.fetchRates();
    }
    
    // If rates are old, fetch new ones
    this.storeListener = ExchangeStore.addListener(this.onChange);
  },

  onChange: function () {
    this.setState({ rates: ExchangeStore.all() });
  },

  componentWillUnmount: function () {
    this.storeListener.remove();
  },

  render: function () {
    return (
      <div>
        <h1>Currency Calculator</h1>
        <form className="" onSubmit={ this.submit }>
          <div className="input">
            <label className="">Amount to Convert</label>
            <input
              type="number"
              valueLink={this.linkState('amount')} />
              <button className="">Convert</button>
          </div>
        </form>
      </div>
    );
  }


});


window.init = function () {
  var root = document.getElementById('root');
  ReactDOM.render(<Calc/>, root);
};
