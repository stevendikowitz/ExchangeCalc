import React from 'react'
import Header from './Header'
import InputSelect from './InputSelect'
import { isInt, isFloat, convertAmount } from '../helper'
import { Button } from 'react-bootstrap'
import InputField from './InputField'
import CurrencyInput from './CurrencyInput'

class Calculator extends React.Component {
  constructor (props) {
    super(props)

    this.onCurrencySelect = this.onCurrencySelect.bind(this)
    this.updateAmount = this.updateAmount.bind(this)
    this.convert = this.convert.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }
  componentDidMount () {
    this.props.onFetchLocalRates()
  }

  componentWillReceiveProps () {
    if (this.outdatedFetch()) {
      this.props.onFetchNewRates()
    }
  }

  amountValid (amount) {
    return isFloat(amount) || isInt(amount)
  }

  outdatedFetch () {
    const lastFetchDate = Date(this.props.lastFetch)
    const currentDate = new Date(Date.now())
    const msecDiff = currentDate - lastFetchDate
    const hoursDiff = Math.floor(msecDiff / 1000 / 60 / 60)

    // Fetches updated currency exchange info if last entries in database we fetched longer than or equal to 24 hours ago.
    return !lastFetchDate || hoursDiff >= 24
  }

  // User selects to or from currency.
  onCurrencySelect (id, value) {
    this.props.onUpdateValue(id, value)
  }

  updateAmount (e) {
    this.props.onUpdateValue('amount', e.target.value)
  }

  onKeyDown (e) {
    if (e.keyCode === 13) {
      this.convert()
    }
  }

  convert () {
    const rates = this.props.rates
    const amount = parseFloat(this.props.amount)
    const fromRate = rates[this.props.from]
    const toRate = rates[this.props.to]

    // No NaNs on my watch!
    if (!this.amountValid(amount)) {
      this.props.onUpdateValue('amount', '')
      return this.props.onUpdateValue('value', 'Not a valid amount. Please enter a number.')
    }

    this.props.onUpdateValue('value', convertAmount(fromRate, toRate, amount))
  }

  render () {
    return (
      <div>
        <Header />
        <section className='content'>
          <div className='input-field group'>
            <InputSelect
              label='FROM'
              value={this.props.from}
              name='from'
              onChange={this.onCurrencySelect}
              placeholder='Select currency'
              options={this.props.options}
            />
            <InputSelect
              label='TO'
              value={this.props.to}
              name='to'
              onChange={this.onCurrencySelect}
              placeholder='Select currency'
              options={this.props.options}
            />
            <InputField
              id='amount'
              type='text'
              label='AMOUNT'
              placeholder='Enter amount'
              onChange={this.updateAmount}
              onKeyDown={this.onKeyDown}
              value={this.props.amount} />
          </div>
          <Button block
            bsStyle='primary'
            bsSize='large'
            onClick={this.convert}>CONVERT</Button>
          <CurrencyInput value={this.props.value} currency={this.props.to} />
        </section>
      </div>
    )
  }
}

Calculator.propTypes = {
  rates: React.PropTypes.object,
  options: React.PropTypes.array,
  lastFetch: React.PropTypes.string,
  from: React.PropTypes.string,
  amount: React.PropTypes.any,
  value: React.PropTypes.string,
  to: React.PropTypes.string,
  onFetchLocalRates: React.PropTypes.func,
  onUpdateValue: React.PropTypes.func,
  onFetchNewRates: React.PropTypes.func
}

export default Calculator
