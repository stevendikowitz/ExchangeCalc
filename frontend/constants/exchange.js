// Not extremely necessary, but as an application grows and the number of actionTypes the dispatcher can receive grows with it, its nice to have constants in order to reduce the chance of a spelling error throwing a dispatcher off.


export const RECEIVE_LOCAL_RATES = 'RECEIVE_LOCAL_RATES'
export const REQUEST_LOCAL_RATES =  'REQUEST_LOCAL_RATES'

export const REQUEST_NEW_RATES =  'REQUEST_NEW_RATES'
export const RECEIVE_NEW_RATES =  'RECEIVE_NEW_RATES'

export const RECEIVE_ERROR =  'RECEIVE_ERROR'

export const RECEIVE_UPDATE_VALUE =  'RECEIVE_UPDATE_VALUE'
