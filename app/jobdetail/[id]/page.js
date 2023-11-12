import JobDetail from '@/components/JobDetail';
import React from 'react'

const page = async ({params}) => {
const resp = await fetch(`${process.env.PRODUCTION_URI}api/jobdetail?id=${params.id}`);
const mainData = await resp.json();

  return (
    <>
    <h1 className='text-3xl font-bold text-center text-white font-montserrat my-3'>Job detail</h1>
    <JobDetail job={mainData.job} />
    </>
  )
}

export default page