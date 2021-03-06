import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer } from '../frontend/reducer'
import CalculatorContainer from './components/CalculatorContainer'

function ExchangeCalculator (props = {}, elementId = 'root') {
  const element = document.getElementById(elementId)

  if (element instanceof HTMLElement) { // eslint-disable-line
    const store = createStore(
      reducer,
      composeWithDevTools(
        applyMiddleware(thunk)
      )
    )

    if (__DEV__) {
      console.info('ExchangeCalc [render]', props) //eslint-disable-line
    }

    ReactDOM.render(
      <Provider store={store}>
        <CalculatorContainer {...props} />
      </Provider>,
      element
    )
  } else {
    throw new Error(`No HTML element found with ID "${elementId}"`)
  }
}

module.exports = ExchangeCalculator
