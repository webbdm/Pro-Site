defmodule ProServerWeb.Router do
  use ProServerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :json_api do 
    plug :accepts, ["json-api"]
    plug JaSerializer.Deserializer
  end

  # This is for HTML 
  # scope "/", ProServerWeb do
  #   pipe_through :browser

  #   get "/", PageController, :index
  # end

  # Other scopes may use custom stacks.
  scope "/api", ProServerWeb do
    pipe_through :json_api

    resources "/posts", PostController
  end

  scope "/auth", ProServerWeb do 
    pipe_through :json_api

    get "/:provider", SessionController, :request
  end
end
