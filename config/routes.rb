Rails.application.routes.draw do
  resources :messages
  root "root#index"
end
