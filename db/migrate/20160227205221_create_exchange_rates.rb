class CreateExchangeRates < ActiveRecord::Migration
  def change
    create_table :exchange_rates do |t|
      t.datetime :date, null: false
      t.decimal :rate, precision: 8, scale: 2, null: false
      t.string :currency , null: false
    end
    add_index :exchange_rates, :currency
  end
end
