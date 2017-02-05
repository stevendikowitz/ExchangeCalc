class AddAndDropColumns < ActiveRecord::Migration
  def change
    remove_column :exchange_rates, :rate
    remove_column :exchange_rates, :currency
    add_column :exchange_rates, :AUD, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :BGN, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :BRL, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :CAD, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :CHF, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :CNY, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :CZK, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :DKK, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :EUR, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :GBP, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :HKD, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :HRK, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :HUF, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :IDR, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :ILS, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :INR, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :JPY, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :KRW, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :MXN, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :MYR, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :NOK, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :NZD, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :PHP, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :PLN, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :RON, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :RUB, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :SEK, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :SGD, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :TRY, :decimal, precision: 8, scale: 2
    add_column :exchange_rates, :ZAR, :decimal, precision: 8, scale: 2
  end
end
