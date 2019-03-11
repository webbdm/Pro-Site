defmodule ProServer.ProServerWeb.Job do
  use Ecto.Schema
  import Ecto.Changeset


  schema "jobs" do
    field :dates, :string
    field :description, :string
    field :employer, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(job, attrs) do
    job
    |> cast(attrs, [:title, :employer, :dates, :description])
    |> validate_required([:title, :employer, :dates, :description])
  end
end
