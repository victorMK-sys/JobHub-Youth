import DashboardCard from "./DashboardCard"
import { getApplications } from "./dashboardRouter"

interface Applications {
  _id: string
  company: string
  position: string
  duration: string
  eLevel: string
}

function Applications() {
  const applications: Applications[] = getApplications()
  return (
    <div>
      <div className="border-b-1 border-gray-300 pb-2 mb-4">
        <h2 className="text-sm text-red-400">Applications</h2>
      </div>
      {applications.length > 0 ? (
        applications.map(applications => (
          <DashboardCard 
            key={applications._id}
            position={applications.position}
            company={applications.company}
            duration={applications.duration}
            eLevel={applications.eLevel}
          />
        ))
      ) : (
        <div className="border-1 rounded-md p-5 bg-red-200 border-red-500 text-red-700">Sorry, you have not made any applications yet.</div>
      )}
    </div>
  )
}

export default Applications