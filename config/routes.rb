Rails.application.routes.draw do
  root to: "static_pages#root"


  namespace :api, defaults: { format: :json } do
     resources :exchange_rates
  end
end
