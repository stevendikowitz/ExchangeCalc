// Container component for Calculator

import { connect } from 'react-redux'
import Calculator from './Calculator'
import {
  fetchLocalRates,
  fetchNewRates,
  updateValue
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  const rates = state.getIn(['rates']).toJS()
  const options = Object.keys(rates).map((rate) => {
    return {
      label: rate,
      value: rate
    }
  }).sort((a, b) => a.value.localeCompare(b.value))

  return Object.assign({}, ownProps, {
    rates,
    options,
    lastFetch: state.getIn(['lastFetch']),
    amount: state.getIn(['amount']),
    to: state.getIn(['to']),
    from: state.getIn(['from']),
    value: state.getIn(['value'])
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchNewRates: () => {
      dispatch(fetchNewRates())
    },

    onFetchLocalRates: () => {
      dispatch(fetchLocalRates())
    },

    onUpdateValue: (id, value) => {
      dispatch(updateValue(id, value))
    }
  }
}

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)

export default CalculatorContainer
