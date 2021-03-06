# For testing purposes with heroku, I destroy all the exchange rates on db:setup.
ExchangeRate.destroy_all

rate1 = ExchangeRate.create!(
  date: '2017-02-03T18:13:41.000Z',
  AUD: '1.31',
  BGN: '1.82',
  BRL: '3.13',
  CAD: '1.31',
  CHF: '1.0',
  CNY: '6.87',
  CZK: '25.16',
  DKK: '6.92',
  EUR: '0.93',
  GBP: '0.8',
  HKD: '7.76',
  HRK: '6.92',
  HUF: '288.11',
  IDR: '13345.0',
  ILS: '3.75',
  INR: '67.32',
  JPY: '113.11',
  KRW: '1147.2',
  MXN: '20.5',
  MYR: '4.43',
  NOK: '8.25',
  NZD: '1.38',
  PHP: '49.77',
  PLN: '4.0',
  RON: '4.2',
  RUB: '59.22',
  SEK: '8.79',
  SGD: '1.41',
  THB: '35.06',
  TRY: '3.74',
  ZAR: '13.43'
)
