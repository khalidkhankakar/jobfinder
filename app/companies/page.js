import CompanyReviewCard from '@/components/CompanyReviewCard'
import React from 'react'

const page = () => {
  return (
    <section class="text-gray-600 body-font">
    <div class="container px-1 py-10 mx-auto ">
    <div class="flex flex-wrap -m-4">
        <CompanyReviewCard />
        <CompanyReviewCard />
        <CompanyReviewCard />
        <CompanyReviewCard />
        <CompanyReviewCard />
      
        </div>
      </div>
      </section>
  )
}

export default page