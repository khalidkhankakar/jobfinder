import Image from 'next/image'
import React from 'react'

const CompanyReviewCard = () => {
  return (
    <div className="flex flex-col justify-center md:w-[45%]  m-auto my-2 w-full">
        <div
            className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-2 max-w-xs md:max-w-3xl mx-auto border border-blue-700 bg-blue-800">
            <div className="w-full md:w-1/3 bg-blue-800 grid place-items-center">
                <Image src="/google.png" width={100} height={100} alt="logo" className="rounded-xl" />
        </div>
                <div className="w-full md:w-2/3 bg-blue-800 flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <p className="text-green-600 font-bold text-sm ml-1">
                                4.96
                                <span className="text-yellow-500 font-normal">(76 reviews)</span>
                            </p>
                        </div>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <h3 className="font-bold text-white md:text-xl text-lg font-montserrat">Google</h3>
                    <p className="text-sm text-gray-200 ">The best kept secret of The Bahamas is the country’s sheer
                        size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
                </div>
            </div>
        </div>
  )
}

export default CompanyReviewCard