defmodule ProServerWeb.PostController do
  use ProServerWeb, :controller

  alias ProServer.ProServer
  alias ProServer.Post

  action_fallback(ProServerWeb.FallbackController)

  def index(conn, _params) do
    posts = ProServer.list_posts()
    render(conn, "index.json", posts: posts)
  end

  def create(conn, %{"post" => post_params}) do
    with {:ok, %Post{} = post} <- ProServer.create_post(post_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.post_path(conn, :show, post))
      |> render("show.json", post: post)
    end
  end

  def show(conn, %{"id" => id}) do
    IO.puts(id)
    post = ProServer.get_post!(id)
    render(conn, "show.json", post: post)
  end

  def update(conn, %{"id" => id, "post" => post_params}) do
    post = ProServer.get_post!(id)

    with {:ok, %Post{} = post} <- ProServer.update_post(post, post_params) do
      render(conn, "show.json", post: post)
    end
  end

  def delete(conn, %{"id" => id}) do
    post = ProServer.get_post!(id)

    with {:ok, %Post{}} <- ProServer.delete_post(post) do
      send_resp(conn, :no_content, "")
    end
  end
end