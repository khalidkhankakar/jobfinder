'use client'
import Loading from '@/app/loading'
import { jobType } from '@/constants'
import JobContext from '@/context/JobContext'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useContext } from 'react'


const Phone = () => {
    const {jobData, setJobData} = useContext(JobContext)
    const router = useRouter();
    const [loading, setLoading] = useState(false);
const handleContinue = (e) => { 
    e.preventDefault();
    setLoading(true)
    setJobData({
      userId:jobData.userId,
      company: jobData.company,
      contactEmail: jobData.contactEmail,
      name: jobData.name,
      phone: jobData.phone,
      heard: jobData.heard,
      jobtitle: jobData.jobtitle,
      hired: jobData.hired,
      location: jobData.location,
      jobtype: data.jobtype,
      jobduration: data.duration,
      salary: data.salary,
      jobdesc:''
    })
    router.push('/build/job-desc')

 }

    const [data, setData] = useState({
        jobtype:'',
        duration:'',
        salary : ''
    });
    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      }
    
  return (
<div className="bg-blue-800 flex w-[50%] rounded-lg m-auto my-4 flex-1 flex-col justify-center px-2 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 font-palanquin text-center text-4xl font-bold leading-9 tracking-tight text-yellow-300">
            Add more details of job
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5 font-montserrat">
          <div>
            <label htmlFor="jobtype" className="block font-medium leading-6 text-white">
            Job type *
              </label>
            <select name="jobtype" id="jobtype" className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6" value={data.jobtype} onChange={handleChange}>
              {
                jobType.map((item)=>(
                  <option value={item.title} key={item.id}>{item.title}</option>
                ))
                }
            </select>
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium leading-6 text-white">
                Duration of job in months *
              </label>
              <div className="mt-1">
                <input
                  id="duration"
                  name="duration"
                  type="text"
                  onChange={handleChange}
                  value={data.duration}
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="salary" className="block text-sm font-medium leading-6 text-white">
                Salary/Amount per month *
              </label>
              <div className="mt-1">
                <input
                  id="salary"
                  name="salary"
                  type="text"
                  onChange={handleChange}
                  value={data.salary}
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

     <div>
              <button
                type="submit"
                className="button w-full"
                onClick={handleContinue}
              >
                {loading ? <Image src="/loadingSvg.svg" width={30} height={30} className="h-8 w-8" alt='loading...' /> : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Phone