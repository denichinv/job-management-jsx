import { useState } from "react";
import "./Jobform.css";
import { JobButtons } from "./JobButtons";
import { JobColumns } from "./JobColumns";
import { JobStatus } from "./JobStatus";

function JobForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [jobStatus, setJobStatus] = useState("running");
  const [jobType, setJobType] = useState("");
  const [needToStart, setNeedToStart] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobType) {
      alert("Please select a job type");
      return;
    }

    const newJob = {
      id: Date.now(),
      title: jobTitle,
      type: jobType,
    };

    switch (jobStatus) {
      case "running":
        setInProgress([...inProgress, newJob]);
        break;
      case "stopped":
        setNeedToStart([...needToStart, newJob]);
        break;
      case "completed":
        setCompleted([...completed, newJob]);
        break;
      default:
        break;
    }

    setJobTitle("");
    setJobType("");
  };

  const handleDelete = (id, column) => {
    switch (column) {
      case "needToStart":
        setNeedToStart(needToStart.filter((job) => job.id !== id));
        break;
      case "inProgress":
        setInProgress(inProgress.filter((job) => job.id !== id));
        break;
      case "completed":
        setCompleted(completed.filter((job) => job.id !== id));
        break;
      default:
        break;
    }
  };

  const handleJobTypeSelect = (type) => {
    setJobType(type);
  };

  return (
    <>
      <div className="form-header">
        <form onSubmit={handleSubmit}>
        <input 
  type="text" 
  placeholder="Enter a job title" 
  value={jobTitle}
  onChange={(e) => setJobTitle(e.target.value)}
  required
/>


          <div className="form-details">
            <div className="bottom-line">
              <JobButtons
                value="Read Emails"
                onClick={() => handleJobTypeSelect("Read Emails")}
                isSelected={jobType === "Read Emails"}
              />
              <JobButtons
                value="Web Parsing"
                onClick={() => handleJobTypeSelect("Web Parsing")}
                isSelected={jobType === "Web Parsing"}
              />
              <JobButtons
                value="Send Emails"
                onClick={() => handleJobTypeSelect("Send Emails")}
                isSelected={jobType === "Send Emails"}
              />
            </div>
          </div>

          <select
            className="job-status"
            value={jobStatus}
            onChange={(e) => setJobStatus(e.target.value)}
          >
            <option value="running">Running</option>
            <option value="completed">Completed</option>
            <option value="stopped">Stopped</option>
          </select>

          <div>
            <button type="submit" className="submit-data">
              Add Job
            </button>
          </div>
        </form>
      </div>

      <main className="columns">
        <JobColumns className="needtostart" status="Need to Start">
          {needToStart.map((job) => (
            <div key={job.id} className="jobstatus-box">
              <JobStatus title={`${job.title} (${job.type})`} />
              <JobButtons
                value="delete"
                onClick={() => handleDelete(job.id, "needToStart")}
              />
            </div>
          ))}
        </JobColumns>

        <JobColumns className="inprocess" status="In Progress">
          {inProgress.map((job) => (
            <div key={job.id} className="jobstatus-box">
              <JobStatus title={`${job.title} (${job.type})`} />
              <JobButtons
                value="delete"
                onClick={() => handleDelete(job.id, "inProgress")}
              />
            </div>
          ))}
        </JobColumns>

        <JobColumns className="completed" status="Completed">
          {completed.map((job) => (
            <div key={job.id} className="jobstatus-box">
              <JobStatus title={`${job.title} (${job.type})`} />
              <JobButtons
                value="delete"
                onClick={() => handleDelete(job.id, "completed")}
              />
            </div>
          ))}
        </JobColumns>
      </main>
    </>
  );
}

export default JobForm;
