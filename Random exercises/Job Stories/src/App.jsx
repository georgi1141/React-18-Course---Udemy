import { useState, useEffect } from "react";
import "./App.css";

const jobIdUrl = "https://hacker-news.firebaseio.com/v0/jobstories.json";

function App() {
  const [page, setPage] = useState(0);
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(jobIdUrl)
      .then((res) => res.json())
      .then((result) => setJobIds(result.slice(page * 6, page * 6 + 6)));
  }, [page]);

  useEffect(() => {
    jobIds.map((job) => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${job}.json`)
        .then((response) => response.json())
        .then((data) => setJobs((old) => [...old, data]));
    });
  }, [jobIds]);

  return (
    <div className="wrapper">
      <h2>Hacker News Jobs Board</h2>
      <section>
        {jobs.map((job, index) => {
          return (
            <div key={index} className="job">
              <div>
                {" "}
                {job.url ? <a href={job.url}>{job.title}</a> : job.title}
              </div>
              <p>
                By {job.by} - {new Date(job.time * 1000).toLocaleString()}
              </p>
            </div>
          );
        })}
      </section>
      <button
        className="btn"
        onClick={() => {
          setPage((old) => old + 1);
        }}
      >
        {" "}
        Load more jobs
      </button>
    </div>
  );
}

export default App;
