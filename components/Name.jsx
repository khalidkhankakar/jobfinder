'use client'
import { numberOfHireEmployees } from '@/constants'
import JobContext from '@/context/JobContext'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState, useContext } from 'react'


const Name = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {jobData, setJobData} = useContext(JobContext)
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
        jobtitle: data.jobtitle,
        hired: data.hireEmployees,
        location:data.location,
        jobtype: '',
        jobduration: '',
        salary: 'null',
        jobdesc:''
    })
    router.push('/build/phone')

 }

    const [data, setData] = useState({
        jobtitle:'',
        hireEmployees : '',
        location : '',
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
            Add job basics
          </h2>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5 font-montserrat">
            <div>
              <label htmlFor="jobtitle" className="block text-sm font-medium leading-6 text-white">
                Job title *
              </label>
              <div className="mt-1">
                <input
                  id="jobtitle"
                  name="jobtitle"
                  type="email"
                  onChange={handleChange}
                  value={data.jobtitle}
                  required
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <label htmlFor="hireEmployees" className="block font-medium leading-6 text-white">
            Number of people to hire for this job *
              </label>
            <select name="hireEmployees" id="hireEmployees" className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6" value={data.hireEmployees} onChange={handleChange}>
              {
                numberOfHireEmployees.map((item)=>(
                  <option value={item} key={item}>{item}</option>
                ))
                }
            </select>
            </div>

<hr className="my-4" />

            <div>
                <p className="text-[1rem] font-semibold text-yellow-400">Where would you like to advertise this job? *</p>
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-white">
                Enter your location
              </label>
              <div className="mt-1">
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  onChange={handleChange}
                  value={data.location}
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div>
              <button
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

export default Name