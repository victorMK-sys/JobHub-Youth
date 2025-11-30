import DashboardCard from "./DashboardCard"
import { getJobs } from "./dashboardRouter"

interface Job {
  _id: string
  company: string
  position: string
  duration: string
  eLevel: string
}

function Home() {
  const jobs: Job[] = getJobs()
  return(
    <div>
      <div className="border-b-1 border-gray-300 pb-2 mb-4">
        <h2 className="text-sm text-red-400">Home</h2>
      </div>
      {jobs.length > 0 ? (
        jobs.map(job => (
          <DashboardCard 
            key={job._id}
            position={job.position}
            company={job.company}
            duration={job.duration}
            eLevel={job.eLevel}
          />
        ))
      ) : (
        <div className="border-1 rounded-md p-5 bg-red-200 border-red-500 text-red-700">Sorry, no jobs available right now. Try again later</div>
      )}
    </div>
  )
}

export default Home