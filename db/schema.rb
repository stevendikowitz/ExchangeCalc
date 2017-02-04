# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170121164222) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exchange_rates", force: :cascade do |t|
    t.datetime "date",                               null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.decimal  "AUD",        precision: 8, scale: 2
    t.decimal  "BGN",        precision: 8, scale: 2
    t.decimal  "BRL",        precision: 8, scale: 2
    t.decimal  "CAD",        precision: 8, scale: 2
    t.decimal  "CHF",        precision: 8, scale: 2
    t.decimal  "CNY",        precision: 8, scale: 2
    t.decimal  "CZK",        precision: 8, scale: 2
    t.decimal  "DKK",        precision: 8, scale: 2
    t.decimal  "EUR",        precision: 8, scale: 2
    t.decimal  "GBP",        precision: 8, scale: 2
    t.decimal  "HKD",        precision: 8, scale: 2
    t.decimal  "HRK",        precision: 8, scale: 2
    t.decimal  "HUF",        precision: 8, scale: 2
    t.decimal  "IDR",        precision: 8, scale: 2
    t.decimal  "ILS",        precision: 8, scale: 2
    t.decimal  "INR",        precision: 8, scale: 2
    t.decimal  "JPY",        precision: 8, scale: 2
    t.decimal  "KRW",        precision: 8, scale: 2
    t.decimal  "MXN",        precision: 8, scale: 2
    t.decimal  "MYR",        precision: 8, scale: 2
    t.decimal  "NOK",        precision: 8, scale: 2
    t.decimal  "NZD",        precision: 8, scale: 2
    t.decimal  "PHP",        precision: 8, scale: 2
    t.decimal  "PLN",        precision: 8, scale: 2
    t.decimal  "RON",        precision: 8, scale: 2
    t.decimal  "RUB",        precision: 8, scale: 2
    t.decimal  "SEK",        precision: 8, scale: 2
    t.decimal  "SGD",        precision: 8, scale: 2
    t.decimal  "TRY",        precision: 8, scale: 2
    t.decimal  "ZAR",        precision: 8, scale: 2
    t.decimal  "THB",        precision: 8, scale: 2
  end

  add_index "exchange_rates", ["date"], name: "index_exchange_rates_on_date", using: :btree

end
