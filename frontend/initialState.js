import Immutable from 'immutable'

const initialState = {
  amount: '',
  conversion: {
    value: '',
    currency: ''
  },
  from: '',
  lastFetch: '',
  notification: {},
  rates: {},
  to: ''
}

export default Immutable.fromJS(initialState)
