import type { ReactElement } from "react"

type DashboardCardProps ={
  position: string,
  company: string,
  duration: string,
  eLevel: string
}

const DashboardCard = (options: DashboardCardProps): ReactElement => {
  const span = "text-xs bg-gray-200 p-1 rounded-md mr-2"
  const {position, company, duration, eLevel} = options

  return (
    <div className="border-2 max-w-48 px-2 pt-20 pb-5 rounded-xl bg-white shadow-md border-gray-300 flex flex-col items-start gap-2 duration-200 hover:shadow-lg hover:border-gray-400 cursor-pointer">
      <h2 className="text-lg">{position}</h2>
      <p className="text-xs">{company}</p>
      <div>
        <span className={span}>{duration}</span>
        <span className={span}>{eLevel}</span>
      </div>
    </div>
  )
}

export default DashboardCard