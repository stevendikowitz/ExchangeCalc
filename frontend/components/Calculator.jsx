import React from 'react'
import Header from './Header'
import InputSelect from './InputSelect'
import { amountValid, convertAmount, formatAmountForConversion } from '../helper'
import { Button } from 'react-bootstrap'
import InputField from './InputField'
import CurrencyInput from './CurrencyInput'
import moment from 'moment'
import FlashNotificationContainer from './FlashNotificationContainer'

class Calculator extends React.Component {
  constructor (props) {
    super(props)

    this.onCurrencySelect = this.onCurrencySelect.bind(this)
    this.updateAmount = this.updateAmount.bind(this)
    this.convert = this.convert.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.outdatedFetch = this.outdatedFetch.bind(this)
  }
  componentDidMount () {
    this.props.onFetchLocalRates()
  }

  componentWillReceiveProps (newProps) {
    if (this.outdatedFetch(newProps)) {
      this.props.onFetchNewRates()
    }
  }

  outdatedFetch (newProps) {
    const lastFetch = moment(newProps.lastFetch)
    const currentDate = moment()

    // Fetches updated currency exchange info if last entries in database we fetched longer than or equal to 24 hours ago.
    return !lastFetch || currentDate.diff(lastFetch, 'hours') >= 24
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
    const amount = formatAmountForConversion(this.props.amount)
    const fromRate = rates[this.props.from]
    const toRate = rates[this.props.to]

    // No NaNs
    if (!amountValid(amount)) return this.props.onInvalidInput()
    if (!fromRate) return this.props.onInvalidInput('FROM currency', this.props.amount)
    if (!toRate) return this.props.onInvalidInput('TO currency', this.props.amount)

    this.props.onConvert({value: convertAmount(fromRate, toRate, amount), currency: this.props.to})
  }

  render () {
    return (
      <div>
        <Header />
        <section className='content'>
          {/* Displays flash notifications, if any */}
          <FlashNotificationContainer />

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
          <CurrencyInput conversion={this.props.conversion} />
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
  conversion: React.PropTypes.object,
  to: React.PropTypes.string,
  onFetchLocalRates: React.PropTypes.func,
  onConvert: React.PropTypes.func,
  onInvalidInput: React.PropTypes.func,
  onUpdateValue: React.PropTypes.func,
  onFetchNewRates: React.PropTypes.func
}

export default Calculator
