import Immutable from 'immutable'

const initialState = {
  lastFetch: '',
  rates: {},
  amount: '',
  from: '',
  to: '',
  value: ''
}

export default Immutable.fromJS(initialState)
