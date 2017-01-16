import React from 'react'
// import ReactDOM from 'react-dom'

class Calculator extends React.Component {
  componentDidMount () {
    debugger
    this.props.onFetchLocalRates()
  }

  onChange () {
    if (this.props.rates.length < 3 || this.outdatedFetch()) {
      this.props.onFetchNewRates()
    }
  }

  outdatedFetch () {
    const rateDate = new Date(this.state.rates[0].created_at)
    const currentDate = new Date(Date.now())
    const msecDiff = currentDate - rateDate
    const hoursDiff = Math.floor(msecDiff / 1000 / 60 / 60)

    // Fetches updated currency exchange info if last entries in database we fetched longer than or equal to 24 hours ago.
    return hoursDiff >= 24
  }

  onFromSelect (e) {
    // User selects from currency.
    this.setState({from: e.target.value})
  }

  onToSelect (e) {
    // User selects to currency.
    this.setState({to: e.target.value})
  }

  convert (e) {
    e.preventDefault()
    const fromCur = this.props.from
    const toCur = this.props.to
    let amount = parseFloat(this.props.amount) || 0
    let fromRate = 1
    let toRate = 1
    let value

    // No NaNs on my watch!
    if (this.props.amount % 1 !== 0) {
      return this.setState({value: 'Not a valid amount. Please enter a number.', amount: '', type: null});
    }
  
    // Iterate through each rate we have and set the local variables toRate and fromRate accordingly.
    this.props.rates.forEach((rate) => {
      const currency = rate.currency
      
      if (currency === fromCur) {
        fromRate = parseFloat(rate.rate)
      } else if (currency === toCur) {
        toRate = parseFloat(rate.rate)
      }
    })

    // If 'to' and 'from' are equivalent, just return the original amount because no conversion is necessary.
    if (fromCur === toCur) {
      return this.setState({value: amount.toFixed(2), type: toCur})
    }
  
    // This is the meat of the entire function. Every exchange rate is in respect to USD, so we need to essentially convert it to USD using the first half of the equation, and then convert it into the desired 'to' currency.
    value = (amount * (1 / fromRate )) * (toRate);
    this.setState({value: value.toFixed(2), type: toCur});
  }

  currencyType () {
    const type = this.state.type
    if (!type) return

    if (type === 'EUR') return <span>&#8364; </span>
    else if (type === 'GBP') return <span>&#163; </span>
    else if (type === 'USD') return <span>$ </span>
  }

  render () {
    const value = this.props.value || 0
    let converted

    // If the user has converted something, let's render it.
    if ( value ) {
      const type = this.currencyType();
      converted = <div className='currency'>{type} {value}</div>;
    }

    return (
      <div>
        <header className='header'>
          <h1 className=''>Currency Calculator</h1>
          <ul className='links group'>
            <li>
              <a
                href='https://github.com/stevendikowitz/ExchangeCalc'
                target='_blank'>
                GitHub Repo
              </a>
            </li>
            <li>
              <a href='http://stevendikowitz.com/' target='_blank'>stevendikowitz.com</a>
            </li>
          </ul>
        </header>

        <section className='content'>
          <form className='' onSubmit={ this.convert }>
            <div className='input-field group'>
              <div className='input'>
                <label>From</label>
                <select onChange={this.onFromSelect}>
                  <option value='EUR'>EUR</option>
                  <option value='GBP'>GBP</option>
                  <option value='USD'>USD</option>
                </select>
              </div>

              <div className='input'>
                <label>To</label>
                <select onChange={this.onToSelect}>
                  <option value='EUR'>EUR</option>
                  <option value='GBP'>GBP</option>
                  <option value='USD'>USD</option>
                </select>
              </div>

              <div className='input'>
                <label className=''>Amount to Convert</label>
                <input
                  type='text'
                  placeholder='Enter amount'
                  value={this.props.amount || 0} />
              </div>
            </div>
            <button className='submit'>convert</button>
          </form>
          {converted}
        </section>
      </div>
    )
  }
}

Calculator.propTypes = {
  rates: React.PropTypes.array,
  onFetchLocalRates: React.PropTypes.func,
  onFetchNewRates: React.PropTypes.func
}

export default Calculator