import React from 'react'
import { FormattedNumber, IntlProvider } from 'react-intl'
import { amountValid } from '../helper'

function CurrencyInput ({ conversion }) {
  const value = conversion.value
  const currency = conversion.currency

  if (!value || !amountValid(value) || !currency) return <div />

  return (
    <div className='currency'>
      <IntlProvider locale='en'>
        <FormattedNumber value={value} style='currency' currency={currency} />
      </IntlProvider>
    </div>
  )
}

CurrencyInput.propTypes = {
  conversion: React.PropTypes.object
}

export default CurrencyInput
