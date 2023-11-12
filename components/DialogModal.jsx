'use client'
import { Fragment, useRef, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import JobContext from '@/context/JobContext'
import parse from 'html-react-parser';

export default function DialogModal({open, setOpen}) {
  const {jobData} = useContext(JobContext)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
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
                <div className=" p-1 rounded-lg ">
                    <p className="font-semibold font-montserrat ">This is a preview of what people may see</p>
<p>Your job post may look slightly different when it goes live.</p></div>
<hr className="my-2" />
              <div className="border px-1 py-2 border-b-0">
                <h1 className="font-bold text-xl ">{jobData.jobtitle}</h1>
                <p>Khalid Group of Petroleum — <span>{jobData.location}</span></p>
              </div>
              <div className="border px-1 py-2 ">
                <p>{parse(jobData.jobdesc)}</p>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="button w-fit px-5"
                    onClick={() => setOpen(false)}
                  >
                    <Image src={'/closeEye.svg'} width={20} height={20} alt='eye' className="m-auto" / >&#160;Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
