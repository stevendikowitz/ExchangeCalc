export function isInt (n) {
  return n !== '' && !isNaN(n) && Math.round(n) === n
}

export function isFloat (n) {
  return n !== '' && !isNaN(n) && Math.round(n) !== n
}

// If 'to' and 'from' are equivalent, just return the original amount because no conversion is necessary.
// This is the meat of the entire function. Every exchange rate is in respect to USD, so we need to essentially
// convert it to USD using the first half of the equation, and then convert it into the desired 'to' currency.
export function convertAmount (fromRate, toRate, amount) {
  return fromRate === toRate ? amount.toFixed(2) : ((amount * (1 / fromRate)) * (toRate)).toFixed(2)
}
