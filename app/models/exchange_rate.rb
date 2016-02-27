# == Schema Information
#
# Table name: exchange_rates
#
#  id       :integer          not null, primary key
#  date     :datetime         not null
#  rate     :decimal(8, 2)    not null
#  currency :string           not null
#

class ExchangeRate < ActiveRecord::Base
  validates :date, :rate, :currency, presence: true
end
