// Container component for Calculator

import { connect } from 'react-redux'
import Calculator from './Calculator'
import {
  fetchLocalRates,
  fetchNewRates
} from '../actions'

const mapStateToProps = (state, ownProps) => {
  debugger
  return Object.assign({}, ownProps, {
    rates: state.getIn(['rates']).toJS() ,
    amount: state.getIn(['amount']),
    to: state.getIn(['to']),
    from: state.getIn(['from']),
    value: state.getIn(['value'])
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchNewRates: () => {
      debugger
      dispatch(fetchNewRates())
    },

    onFetchLocalRates: () => {
      dispatch(fetchLocalRates())
    }
  }
}

const CalculatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator)

export default CalculatorContainer
