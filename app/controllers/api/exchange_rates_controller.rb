class Api::ExchangeRatesController < ApplicationController
  def index
    @rates = ExchangeRates.limit(4).order('id desc')
    render :index
  end

  def create
    @rate = ExchangeRates.new(exchange_rate_params)

    if @rate.save
      render :show
    else
      render json: {errors: @user.errors.full_messages}.to_json, status: 422
    end
  end

  def show
    @rate = ExchangeRates.find(params[:id])
    render :show
  end

  private
  def exchange_rate_params
    params.require(:exchange_rate).permit(
      :rate,
      :date,
      :currency
    )
  end
end
