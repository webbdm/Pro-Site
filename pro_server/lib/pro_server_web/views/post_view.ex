defmodule ProServerWeb.PostView do
  use ProServerWeb, :view
  use JaSerializer.PhoenixView

  alias ProServerWeb.PostView

  attributes [:title, :body]
end
