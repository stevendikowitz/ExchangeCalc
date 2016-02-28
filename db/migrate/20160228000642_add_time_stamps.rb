class AddTimeStamps < ActiveRecord::Migration
  def change
    change_table(:exchange_rates) { |t| t.timestamps }
  end
end
