Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      post 'recipes/create'
      get '/recipes/:id', to: "recipes#show"
      delete '/recipes/:id', to: "recipes#destroy"
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
