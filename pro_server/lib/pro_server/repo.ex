defmodule ProServer.Repo do
  use Ecto.Repo,
    otp_app: :pro_server,
    adapter: Ecto.Adapters.Postgres
end
