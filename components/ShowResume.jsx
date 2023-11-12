'use client'
import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { getTokenData } from '@/helpers/getTokenData'
import Image from 'next/image'


export default function ShowResume ({open, setOpen}) {
    const [img, setImg] = useState('')
    const [data, setData] = useState({
        fullname:'',
         university:'',
         phoneNumber:'',
         email:'',
        address:'',
        city:'', 
        postalCode:'',
         degreeName:'',
         yearOfDegree:'',
         session:'',
        skillName:'',
        experience:'',  
    })
    
useEffect(()=>{
    const resumeDetail = async () => { 
        const token = await getTokenData();
        setImg(token.image)
        const resumeResp =  await fetch(`http://localhost:3000/api/resume?id=${token.id}`,{
            method:'GET'
          })
          const resumeData = await resumeResp.json()
          const {fullname, university, phoneNumber, email,address,city, country,postalCode, degreeName, yearOfDegree, session,skillName,experience} =  resumeData.getResume[0];
          setData({
            fullname:fullname,
            university:university,
            phoneNumber:phoneNumber,
            country:country,
            email:email,
            address:address,
            city:city, 
            postalCode:postalCode,
            degreeName:degreeName,
            yearOfDegree:yearOfDegree,
            session:session,
            skillName:skillName,
            experience:experience,  
        })
    }
    resumeDetail()
}, [])


  const cancelButtonRef = useRef(null)

  return (
    <>
    <Transition.Root show={open} as={Fragment} className="">
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-indigo-200 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10  overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="px-2 py-4 relative transform overflow-hidden md:w-full rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
              <div class="bg-gray-100 p-4">

<div class="border-1 shadow-lg shadow-gray-700 bg-cyan-100 rounded-lg">

    {/* <!-- top content --> */}
    <div class="flex rounded-t-lg bg-yellow-800 sm:px-2 w-full">
        <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <Image src={img} width={100} height={100} alt='profile pic'  className='rounded-lg'/>
        </div>

        <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p class="font-montserrat  uppercase  font-bold  text-heading sm:text-3xl text-2xl">{data.fullname}</p>
            <p class="text-heading font-semibold font-signika">{data.skillName}</p>
        </div>

    </div>

    {/* <!-- main content --> */}
    <div class="p-5">

        <div class="flex flex-col sm:flex-row sm:mt-10">

            <div class="flex flex-col sm:w-1/3">
                {/* <!-- My contact --> */}
                <div class="py-3 sm:order-none order-3">
                    <h2 class="heading">My Contact</h2>
                    <div class="border-2 w-20 border-yellow-800 my-1"/>

                    <div>
                        <div class="flex items-center my-1">
                            <div class="truncate">{data.email}</div>
                        </div>
                        <div class="flex items-center my-1">
                            <div>{data.phoneNumber}</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Skills --> */}
                <div class="py-3 sm:order-none order-2">
                    <h2 class="heading">Top Skill</h2>
                    <div class="border-2 w-20 border-yellow-800 my-1"></div>

                    <div>
                        <div class="flex items-center">
                            <div class="">{data.skillName}</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Education Background --> */}
                <div class="py-3 sm:order-none order-1">
                    <h2 class="heading">Education Background</h2>
                    <div class="border-2 w-20 border-top-color my-3"></div>

                    <div class="flex flex-col space-y-1">
                        <div class="flex flex-col">
                            <p class="font-semibold text-xs text-gray-700">{data.session}</p>
                            <p class="font-semibold text-xs text-gray-700">{data.degreeName}</p>
                            <p class="text-sm font-medium">{data.university}</p>
                            <p class="font-bold text-xs text-gray-700 mb-2">Percentage: 76.61</p>
                        </div>



                    </div>
                </div>

                <div class="py-3 sm:order-none order-1">
                    <h2 class="heading">Address</h2>
                    <div class="border-2 w-20 border-yellow-800 my-3"></div>

                    <div class="flex flex-col space-y-1">
                        <div class="flex flex-col">
                            <p class="font-bold font-signika text-lg text-black ">City:</p>
                            <p class="font-semibold text-xs text-red-800">{data.city}</p>
                            <p class="font-bold font-signika text-lg text-black ">Postal Code</p>
                            <p class="font-semibold text-xs text-red-800">{data.postalCode}</p>
                            <p class="font-bold font-signika text-lg text-black ">Country:</p>
                            <p class="font-semibold text-xs text-red-800">{data.country}</p>
                        </div>



                    </div>
                </div>
            </div>


            <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">

                {/* <!-- About me --> */}
                <div class="py-3">
                    <h2 class="heading">About Me</h2>
                    <div class="border-2 w-20 border-top-color my-3"></div>
                    <p>To get a career opportunity which would help me to utilize my academic background to assist
                        me to gain experience, employ my excellent skills, and enable me to make positive
                        contribution.</p>
                </div>

                {/* <!-- Professional Experience --> */}
                <div class="py-3">
                    <h2 class="heading">Professional Experience</h2>
                    <div class="border-2 w-20 border-top-color my-3"></div>

                    <div class="flex flex-col">

                        <div class="flex flex-col">
                            <p class="text-lg font-bold text-gray-700">Netcracker Technology | Software Engineer</p>
                            <p class="font-semibold text-sm text-gray-700">2021 - Present</p>
                            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                            <ul class="text-sm list-disc pl-4 space-y-1">
                                <li>Working on customer facing product</li>
                                <li>Deliverying highly efficient solutions</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>

                        <div class="flex flex-col mt-8">
                            <p class="text-lg font-bold text-gray-700">TailwindFlex.com | Lead</p>
                            <p class="font-semibold text-sm text-gray-700">2020-2021</p>
                            <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">Key Responsibilities</p>
                            <ul class="text-sm list-disc pl-4 space-y-1">
                                <li>Developed usable components</li>
                                <li>Solving complex problems</li>
                                <li>Solving critical bugs</li>
                            </ul>
                        </div>

                    </div>

                </div>

                {/* <!-- Projects --> */}
                <div class="py-3">
                    <h2 class="heading">Projects</h2>
                    <div class="border-2 w-20 border-top-color my-3"></div>

                    <div class="flex flex-col">

                        <div class="flex flex-col">
                            <p class="text-lg font-semibold text-gray-700">Used Books mobile app</p>
                            <p class="font-normal text-sm text-gray-700 mb-1 pl-2">A platform to sell as well as to
                                buy used books only for PCCoE College due to this reuse of books will be there
                                beneficial for environment also indirectly helps increase communication between
                                juniors and seniors.</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-lg font-semibold text-gray-700">Parking Automation System</p>
                            <p class="font-normal text-sm text-gray-700 mb-1 pl-2">it’s a web application which
                                helps you to book your slot for your car just like booking a movie ticket from home.
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    </div>

</div>

</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  )
}
