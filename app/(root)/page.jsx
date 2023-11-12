import Card from '@/components/Card'
import FiltersBar from '@/components/FiltersBar'
import Input from '@/components/Input'

const Home = async ({searchParams}) => {
  const resp = await fetch(`${process.env.LOCALHOST_URI}api/employeer?title=${searchParams.title||''}&loca=${searchParams.loca||''}&jobtype=${searchParams.jobtype||''}&pay=${searchParams.pay||''}`,{
    method:'GET',
    next: { tags: ['collection']} 
  });
  const parseResp = await resp.json()

  return (
    <>
    <Input />
    <div className="mt-4">
      <FiltersBar />
    </div>
    <section class="text-gray-600 body-font">
    <div class="container px-1 py-10 mx-auto">
    <div class="flex flex-wrap -m-4">
    {
        parseResp.jobs.length <= 0 && <h1 className='text-2xl md:text-4xl font-bold m-auto my-6 text-white font-mooli'>😕Oops! No result found😌</h1>
    }
    {
        parseResp.jobs.map((job)=>(
          <Card key={job._id} job={job} />
        ))
      }
      </div>
      </div>
      </section>
    </>
  )
}

export default Home