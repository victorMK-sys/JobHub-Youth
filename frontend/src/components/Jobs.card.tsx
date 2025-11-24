import type { ReactElement } from "react"

type JobOptions = {
  position: String,
  duration: String,
  eLevel: String
}

const p = "text-xs text-gray-700 bg-gray-200 p-1"
const span = "text-xs text-gray-700"

function Jobcard(options: JobOptions): ReactElement {
  const {position, duration, eLevel} = options
  return(
    <div className="flex justify-between px-2 items-center border-1 rounded-sm p-2">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-xl text-yellow-900">{position}</h1>
          <div className="flex items-center gap-2">
            <span className={span}>Entry Level: </span><p className={p}>{eLevel}</p>
            <span className={span}>Duration: </span><p className={p}>{duration}</p>
          </div>
        </div>
        <button type="button" className="bg-black text-white px-2 py-1 rounded-sm cursor-pointer duration-200 hover:bg-yellow-500">More</button>
    </div>
  )
}

export default Jobcard