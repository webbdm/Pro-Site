defmodule ProServer.ProServerWebTest do
  use ProServer.DataCase

  alias ProServer.ProServerWeb

  describe "jobs" do
    alias ProServer.ProServerWeb.Job

    @valid_attrs %{dates: "some dates", description: "some description", employer: "some employer", title: "some title"}
    @update_attrs %{dates: "some updated dates", description: "some updated description", employer: "some updated employer", title: "some updated title"}
    @invalid_attrs %{dates: nil, description: nil, employer: nil, title: nil}

    def job_fixture(attrs \\ %{}) do
      {:ok, job} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ProServerWeb.create_job()

      job
    end

    test "list_jobs/0 returns all jobs" do
      job = job_fixture()
      assert ProServerWeb.list_jobs() == [job]
    end

    test "get_job!/1 returns the job with given id" do
      job = job_fixture()
      assert ProServerWeb.get_job!(job.id) == job
    end

    test "create_job/1 with valid data creates a job" do
      assert {:ok, %Job{} = job} = ProServerWeb.create_job(@valid_attrs)
      assert job.dates == "some dates"
      assert job.description == "some description"
      assert job.employer == "some employer"
      assert job.title == "some title"
    end

    test "create_job/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ProServerWeb.create_job(@invalid_attrs)
    end

    test "update_job/2 with valid data updates the job" do
      job = job_fixture()
      assert {:ok, %Job{} = job} = ProServerWeb.update_job(job, @update_attrs)
      assert job.dates == "some updated dates"
      assert job.description == "some updated description"
      assert job.employer == "some updated employer"
      assert job.title == "some updated title"
    end

    test "update_job/2 with invalid data returns error changeset" do
      job = job_fixture()
      assert {:error, %Ecto.Changeset{}} = ProServerWeb.update_job(job, @invalid_attrs)
      assert job == ProServerWeb.get_job!(job.id)
    end

    test "delete_job/1 deletes the job" do
      job = job_fixture()
      assert {:ok, %Job{}} = ProServerWeb.delete_job(job)
      assert_raise Ecto.NoResultsError, fn -> ProServerWeb.get_job!(job.id) end
    end

    test "change_job/1 returns a job changeset" do
      job = job_fixture()
      assert %Ecto.Changeset{} = ProServerWeb.change_job(job)
    end
  end
end
