import Immutable from 'immutable'

const initialState = {
  rates: [],
  amount: '',
  from: 'BTC',
  to: 'BTC',
  value: ''
}

export default Immutable.fromJS(initialState)