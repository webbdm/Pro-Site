defmodule ProServerWeb.PageController do
  use ProServerWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
