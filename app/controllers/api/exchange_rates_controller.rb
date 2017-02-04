class Api::ExchangeRatesController < ApplicationController
  def index

    # Since we'll be fetching new rates every day but only ever need the most recent, we'll limit the amount fetched from the database to the most recent.
    @rates = ExchangeRate.limit(1).order('date desc')[0]
    render :index
  end

  def create
    @rates = ExchangeRate.new(exchange_rate_params)
    # If the rate is able to save to the database (it meets the validations we set on it) we render the show view. Else, we can catch the errors.
    if @rates.save
      render :show
    else
      render json: {errors: @user.errors.full_messages}.to_json, status: 422
    end
  end

  def show

    # Turns out I didn't need this method.
    @rate = ExchangeRate.find(params[:id])
    render :show
  end

  private
  def exchange_rate_params
    # We only allow permitted parameters to be posted to the database to make sure no hackers try any funny business.
    params.require(:exchangeRates).permit(
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
      :date
    )
  end
end
