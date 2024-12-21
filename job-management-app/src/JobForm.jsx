import './Jobform.css'

function JobForm() {
  return (
    <div className='form-header'>
      <form>
         <input type="text" placeholder='Enter a job title' value={""}   />
   
        <div className="form-details">
            
            <div className="bottom-line">
            <button value="">Read Emails</button>
            <button value="">Web Parsing</button>
            <button value="">Send Emails</button> 
            </div>
            </div>

            <select className="job-status">
  <option value="start">Start Process</option>
  <option value="running">Running</option>
  <option value="completed">Completed</option>
  <option value="stopped">Stopped</option>
</select>
<div>
<button type="submit" className="submit-data">Add Job</button>
</div>
      </form>
    </div>
  )
}

export default JobForm
