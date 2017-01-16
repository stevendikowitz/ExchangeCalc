import Immutable from 'immutable'

const initialState = {
  rates: [],
  amount: '',
  from: 'USD',
  to: 'USD',
  value: ''
}

export default Immutable.fromJS(initialState)