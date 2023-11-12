import SingleFilter from "./SingleFilter"
import { jobType, payFilter, timeFilter } from "@/constants"

const FiltersBar = () => {
  return (
    <div className="flex justify-center items-center space-x-3">
        <SingleFilter title='date' array={timeFilter} />
        <SingleFilter title='pay' array={payFilter} />
        <SingleFilter title='jobtype' array={jobType} />
    </div>
  )
}

export default FiltersBar