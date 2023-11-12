'use client'
import { heardAboutUs } from "@/constants";
import JobContext from "@/context/JobContext";
import { getTokenData } from "@/helpers/getTokenData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";

const Employer = () => {
  const router = useRouter()
  const {setJobData} = useContext(JobContext)
  const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        company: '',
        contactEmail: '',
        name: '',
        phone: '',
        heard:''
      });
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const takingId = await getTokenData();
//      takingId.id
        setJobData({
        userId: takingId.id,
        company: data.company,
        contactEmail: data.contactEmail,
        name: data.name,
        phone: data.phone,
        heard: data.heard,
        jobtitle: '',
        hired: '',
        location:'',
        jobtype: '',
        jobduration: '',
        salary: null,
        jobdesc:''
        })
        router.push('/build/name')


    }

      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value
        });
      }


  return (
    <>
          <div className="bg-blue-800 flex w-[50%] rounded-lg m-auto my-2 flex-1 flex-col justify-center px-2 py-3 lg:px-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 font-palanquin text-center text-xl md:text-3xl font-bold  text-white">
            Create an employer account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form encType="multipart/form-data" className="space-y-5 font-montserrat" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-white">
                Your company&apos;s name
              </label>
              <div className="mt-1">
                <input
                  id="company"
                  name="company"
                  type="text"
                  onChange={handleChange}
                  value={data.company}
                  required
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="heard" className="block font-medium leading-6 text-white">
                How to do you heard about us
              </label>
            <select name="heard" id="heard" className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6" value={data.heard} onChange={handleChange}>
              {
                heardAboutUs.map((item)=>(
                  <option value={item} key={item}>{item}</option>
                ))
                }
            </select>
            </div>
                <div>
            <label htmlFor="contactEmail" className="block leading-6 text-white">
            Contact/Secondary email
              </label>
              <input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  required
                  onChange={handleChange}
                  value={data.contactEmail}
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
            </div>


            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
                Your first and last name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  onChange={handleChange}
                  value={data.name}
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white">
                Your phone number
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="phone"
                  name="phone"
                  min={0}
                  max={14}
                  type="number"
                  required
                  value={data.phone}
                  onChange={handleChange}
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                {loading ? <Image src="/loadingSvg.svg" width={30} height={30} className="h-8 w-8" alt='loading...'  /> : 'Continue'}

              </button>
            </div>
          </form>
        </div>
        </div>  
        </>
  )
}

export default Employer