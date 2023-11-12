'use client'
import { useState } from "react"
import JobContext from "./JobContext"
const JobContextProvider = ({children}) => {
    const [jobData, setJobData] = useState({
        userId: '',
        company:'',
        contactEmail:'',
        name:'',
        phone:'',
        heard:'',
        jobtitle: '',
        hired: '',
        location:'',
        jobtype: '',
        jobduration: '',
        salary: null,
        jobdesc:''
    })
  return (
    <JobContext.Provider value={{jobData, setJobData}}>{children}</JobContext.Provider>
  )
}

export default JobContextProvider