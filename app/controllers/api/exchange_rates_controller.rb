class Api::ExchangeRatesController < ApplicationController
  def index

    # Since we'll be fetching new rates every day but only ever need the most recent, we'll limit the amount fetched from the database to the three most recent.
    @rates = ExchangeRate.limit(3).order('id desc')
    render :index
  end

  def create
    @rate = ExchangeRate.new(exchange_rate_params)

    # If the rate is able to save to the database (it meets the validations we set on it) we render the show view. Else, we can catch the errors.
    if @rate.save
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
    params.require(:exchange_rate).permit(
      :rates,
      :date,
      :created_at
    )
  end
end
