Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
     resources :exchange_rates
  end
end
