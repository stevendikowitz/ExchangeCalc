// Container component for Calculator

import { connect } from 'react-redux'
import Calculator from './Calculator'
import {
  fetchLocalRates,
  fetchNewRates
} from './actions'

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    rates: state.getIn(['rates']).toJS(),
    amount: state.getIn(['amount']).toJS(),
    to: state.getIn(['to']),
    from: state.getIn(['from']),
    value: state.getIn(['value']).toJS()
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchNewRates: () => {
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
