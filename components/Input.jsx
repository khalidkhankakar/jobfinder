'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Input = () => {
  const router = useRouter();
  const [findjob, setFindjob] = useState({
    job: '',
    location: '',
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {

    try {

      e.preventDefault();
      setLoading(true)
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.set('title', findjob.job)
      searchParams.set('loca', findjob.location)
      const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
      router.push(newPathname)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }

  }
  const handleChange = (e) => {
    setFindjob({
      ...findjob,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center  space-y-5 md:space-y-0 font-montserrat bg-blue-950 py-2 w-[90%] m-auto px-3 my-4 rounded-md md:justify-betweens   ">
        <div className="flex items-center w-full bg-blue-500  rounded-md  md:rounded-none  px-2">
          <label htmlFor="job">
            <Image src={"/search.svg"} width={28} height={28} alt={'location'} className="h-5 w-5" />
          </label>
          <div className="flex-1">
            <input
              id="job"
              name="job"
              type="text"
              placeholder="Job title"
              onChange={handleChange}
              value={findjob.job}
              required
              className="block bg-blue-500  outline-none text-white w-full  border-0 py-1.5 px-2 shadow-sm placeholder:text-white sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex items-center w-full  bg-blue-500 rounded-md  md:rounded-none px-2">
          <label htmlFor="location">
            <Image src={"/location.svg"} width={28} height={28} alt={'location'} className="h-5 w-5" />
          </label>
          <div className="flex-1">
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Location"
              onChange={handleChange}
              value={findjob.location}
              className="block bg-blue-500 outline-none text-white w-full  border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
            />
          </div>
        </div>


        <div className="w-full md:w-[15rem] md:mx-3">
          <button
            type="submit"
            className="button w-full"
            onClick={handleSubmit}
          >
            {loading ? <Image src="/loadingSvg.svg" width={30} height={30} className="h-8 w-8" alt='loading...' /> : 'Find jobs'}
          </button>
        </div>
      </form>
    </>
  )
}

export default Input