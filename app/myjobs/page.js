import Card from '@/components/Card';
import { getTokenData } from '@/helpers/getTokenData';
import React from 'react'

const page = async () => {
    const token = await getTokenData();
    const resp = await fetch(`http://localhost:3000/api/employeer?userId=${token.id}`,{
        method:'GET'
      });
      const parseResp = await resp.json()
      console.log(parseResp);
  return (
    <section class="text-gray-600 body-font">
      <h1 className='font-palanquin text-2xl text-white mt-2 text-center'>Your jobs</h1>

    <div class="container px-1 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
      {
        parseResp.jobs.map((job)=>(
          <Card key={job._id} job={job} />
        ))
      }
      
      </div>
      </div>
      </section>
  )
}

export default page