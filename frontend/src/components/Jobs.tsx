import Jobcard from "./Jobs.card"
import { useEffect, useState } from "react"

interface Job {
  position: string,
  duration: string,
  eLevel: string
}

function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    fetch('http://localhost:5500/api/jobs')
      .then(res => res.status == 200 ? res.json() : [""])
      .then(data => setJobs(data))
      .catch(err => console.log(err.message))
    }, [])

  return(
    <div className="flex flex-col gap-10 mb-20">
      <h1 className="bg-yellow-300 font-bold text-2xl p-2 rounded-sm">Job Listings:</h1>
      {jobs.map((job, index) => renderJob(job, index))}
    </div>
  )
}

const renderJob = (job: Job, index: any) => {
  if(Jobs.length > 0) {
    return (
      <Jobcard key={index} position={job.position} duration={job.duration} eLevel={job.eLevel}/>
    )
  } else {
    return (
      <div key={index} className="bg-red-200 border-1 border-red-500 rounded-md p-5 text-lg text-red-900">Sorry, no job listings are availble right now. Try again later!</div>
    )
  }
}

export default Jobs