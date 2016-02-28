# == Schema Information
#
# Table name: exchange_rates
#
#  id         :integer          not null, primary key
#  date       :datetime         not null
#  rate       :decimal(8, 2)    not null
#  currency   :string           not null
#  created_at :datetime
#  updated_at :datetime
#

class ExchangeRate < ActiveRecord::Base
  # We validate that each of these values are present before we save a new exchange rate to the database.
  validates :date, :rate, :currency, presence: true
end
