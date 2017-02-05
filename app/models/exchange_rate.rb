# == Schema Information
#
# Table name: exchange_rates
#
#  id         :integer          not null, primary key
#  date       :datetime         not null
#  created_at :datetime
#  updated_at :datetime
#  AUD        :decimal(8, 2)
#  BGN        :decimal(8, 2)
#  BRL        :decimal(8, 2)
#  CAD        :decimal(8, 2)
#  CHF        :decimal(8, 2)
#  CNY        :decimal(8, 2)
#  CZK        :decimal(8, 2)
#  DKK        :decimal(8, 2)
#  EUR        :decimal(8, 2)
#  GBP        :decimal(8, 2)
#  HKD        :decimal(8, 2)
#  HRK        :decimal(8, 2)
#  HUF        :decimal(8, 2)
#  IDR        :decimal(8, 2)
#  ILS        :decimal(8, 2)
#  INR        :decimal(8, 2)
#  JPY        :decimal(8, 2)
#  KRW        :decimal(8, 2)
#  MXN        :decimal(8, 2)
#  MYR        :decimal(8, 2)
#  NOK        :decimal(8, 2)
#  NZD        :decimal(8, 2)
#  PHP        :decimal(8, 2)
#  PLN        :decimal(8, 2)
#  RON        :decimal(8, 2)
#  RUB        :decimal(8, 2)
#  SEK        :decimal(8, 2)
#  SGD        :decimal(8, 2)
#  TRY        :decimal(8, 2)
#  ZAR        :decimal(8, 2)
#  THB        :decimal(8, 2)
#

class ExchangeRate < ActiveRecord::Base
  # We validate that each of these values are present before we save a new exchange rate to the database.
  validates :date,
    :AUD,
    :BGN,
    :BRL,
    :CAD,
    :CHF,
    :CNY,
    :CZK,
    :DKK,
    :EUR,
    :GBP,
    :HKD,
    :HRK,
    :HUF,
    :IDR,
    :ILS,
    :INR,
    :JPY,
    :KRW,
    :MXN,
    :MYR,
    :NOK,
    :NZD,
    :PHP,
    :PLN,
    :RON,
    :RUB,
    :SEK,
    :SGD,
    :THB,
    :TRY,
    :ZAR,
    presence: true
end
