defmodule ProServer.Repo.Migrations.CreateJobs do
  use Ecto.Migration

  def change do
    create table(:jobs) do
      add :title, :string
      add :employer, :string
      add :dates, :string
      add :description, :string

      timestamps()
    end

  end
end
