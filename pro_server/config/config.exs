# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :pro_server,
  ecto_repos: [ProServer.Repo]

# Configures the endpoint
config :pro_server, ProServerWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "cdDbQ9Oue6t1Vz7nm7wTqa5BehepLJ5DKobf5AfVfpLmGz6Niu7b3WbmzNRR63Sw",
  render_errors: [view: ProServerWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ProServer.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :phoenix, :format_encoders,
  "json-api": Poison

config :mime, :types, %{
  "application/vnd.api+json" => ["json-api"]
}

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
