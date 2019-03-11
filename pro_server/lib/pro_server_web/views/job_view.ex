defmodule ProServerWeb.JobView do
  use ProServerWeb, :view
  alias ProServerWeb.JobView

  def render("index.json", %{jobs: jobs}) do
    %{data: render_many(jobs, JobView, "job.json")}
  end

  def render("show.json", %{job: job}) do
    %{data: render_one(job, JobView, "job.json")}
  end

  def render("job.json", %{job: job}) do
    %{id: job.id,
      title: job.title,
      employer: job.employer,
      dates: job.dates,
      description: job.description}
  end
end
