import './Jobform.css'
import { JobButtons } from './JobButtons'
import { JobColumns } from './JobColumns'

function JobForm() {
  return (
   <>
    <div className='form-header'>
      <form>
         <input type="text" placeholder='Enter a job title' value={""}   />
   
        <div className="form-details">
            
            <div className="bottom-line">
            <JobButtons value="Read Emails"/>
            <JobButtons value="Web Parsing"/>
            <JobButtons value="Send Emails"/>
            </div>
            </div>

            <select className="job-status">

  <option value="running">Running</option>
  <option value="completed">Completed</option>
  <option value="stopped">Stopped</option>
</select>
<div>
<button type="submit" className="submit-data">Add Job</button>
</div>
      </form>

      
    </div>
    <main className='columns'>
      <JobColumns className="needtostart" value="Need to Start"/>
      <JobColumns className="inprocess" value="In Progress"/>
      <JobColumns className="completed" value="Completed"/>
    </main>
    </>
  )
}

export default JobForm
