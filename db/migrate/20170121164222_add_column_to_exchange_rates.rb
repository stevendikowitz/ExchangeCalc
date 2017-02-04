class AddColumnToExchangeRates < ActiveRecord::Migration
  def change
    add_column :exchange_rates, :THB, :decimal, precision: 8, scale: 2
    add_index :exchange_rates, :date
  end
end
