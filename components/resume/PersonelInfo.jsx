'use client'
import { getTokenData } from '@/helpers/getTokenData';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export const PersonelInfo = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [data, setData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    degreeName: '',
    yearOfDegree: '',
    session: '',
    university: '',
    skillName: '',
    experience: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const takingId = await getTokenData();
      const newData = {
        userId: takingId.id,
        fullname:data.fullname,
        email:data.email,
        phoneNumber:data.phoneNumber,
        address:data.address,
        city:data.city,
        country:data.country,
        postalCode:data.postalCode,
        degreeName:data.degreeName,
        yearOfDegree:data.yearOfDegree,
        session:data.session,
        university:data.university,
        skillName:data.skillName,
        experience:data.experience
      }
      const resp = await axios.post("/api/resume", newData);
      setLoading(false)
    router.push('/profile')
  }
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }
  return (
    <section className=" py-1 bg-blue-600">
      <div className="w-full lg:w-8/12 px-4 bg-blue-900 mx-auto mt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-yellow-300 mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-black font-signika text-2xl font-bold">
                Build your resume
              </h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 className="text-yellow-500 text-lg my-3 font-signika font-semibold ">
                User Information
              </h6>
              <div className="flex flex-wrap font-mooli">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm  mb-2" htmlFor="fullname">
                      Full Name *
                    </label>
                    <input type="text" name='fullname' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.fullname} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm  mb-2" htmlFor="email">
                      Email address *
                    </label>
                    <input type="email" name='email' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.email} />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="phoneNumber">
                      Phone number *
                    </label>
                    <input type="text" name='phoneNumber' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.phoneNumber} />
                  </div>
                </div>

              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-yellow-500 text-lg my-3 font-signika font-semibold  ">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="address">
                      Address *
                    </label>
                    <input type="text" name='address' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.address} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="city">
                      City, State *
                    </label>
                    <input type="text" name="city" className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.city} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="country">
                      Country *
                    </label>
                    <input type="text" name='country' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.country} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="postalCode">
                      Postal Code *
                    </label>
                    <input type="text" name='postalCode' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.postalCode} />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 " />

              <h6 className="text-yellow-500 text-lg my-3 font-signika font-semibold  ">
                Education *
              </h6>
              <div className="flex flex-wrap font-mooli">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="degreeName">
                      Degree Name *
                    </label>
                    <input type="text" name='degreeName' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.degreeName} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="yearOfDegree">
                      Years of the Degree *
                    </label>
                    <input type="text" name='yearOfDegree' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.yearOfDegree} />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="session">
                      Session *
                    </label>
                    <input type="text" name='session' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.session} placeholder='2016 - 2020' />
                  </div>
                </div>
                <div className="w-full lg:w-12/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="university">
                      University, School, College *
                    </label>
                    <input type="text" name='university' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.university} />
                  </div>
                </div>
              </div>


              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-yellow-500 text-lg my-3 font-signika font-semibold  ">
                Skills *
              </h6>
              <div className="flex flex-wrap font-mooli">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="skillName">
                      Skill Name *
                    </label>
                    <input type="text" name='skillName' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.skillName} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label className="block  text-white text-sm mb-2" htmlFor="experience">
                      Experience *
                    </label>
                    <input type="text" name='experience' className="border-0 px-3 py-3  text-white bg-indigo-500 rounded text-sm shadow focus:outline-none  focus:ring w-full ease-linear transition-all duration-150" onChange={handleChange} value={data.experience} />
                  </div>
                </div>
              </div>
              <button onClick={handleSubmit} className='button2 w-1/2 m-auto mt-3'>{loading?'Creating...':'Create Resume'}</button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}
