import React from 'react'
import { FormattedNumber, IntlProvider } from 'react-intl'

function CurrencyInput ({ value, currency }) {
  if (!value) return <div />

  return (
    <div className='currency'>
      <IntlProvider locale='en'>
        <FormattedNumber value={value} style='currency' currency={currency} />
      </IntlProvider>
    </div>
  )
}

CurrencyInput.propTypes = {
  value: React.PropTypes.any,
  currency: React.PropTypes.string
}

export default CurrencyInput
