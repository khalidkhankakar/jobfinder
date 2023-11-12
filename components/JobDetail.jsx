import Image from "next/image"
import parse from 'html-react-parser';

const JobDetail = ({job}) => {
    return (

<div className="px-4 py-2 my-1  text-white bg-blue-900 font-montserrat border border-white rounded-lg  m-auto w-[90vw]  ">
      <h1 className="text-2xl font-montserrat font-bold ">{job.jobtitle}</h1>
      <h3 className="text-[1rem]  ">{job.company}</h3>
      <div className="location flex "><span className="text-sm">{job.location}</span></div>
      <button className="button my-2 w-fit">Apply now</button>
      <hr/>
      <h3 className="text-lg font-semibold">Job details</h3>
      <p className="text-[0.7rem] italic">Here’s how the job details align with your job preferences.
Manage job preferences anytime in your profile.</p>
<div className="flex my-1 items-center">
      <Image src={"/bag.svg"} width={20} height={20} className="h-6 w-6 mx-2" alt="dots" /><span className="italic text-sm">{job.jobtype}</span>
      </div>
      <p className="text-[0.7rem] italic"><span className="font-bold text-sm">Company Mail:</span> &nbsp;&nbsp;&nbsp;{job.contactEmail}</p>
      <p className="text-[0.7rem] italic"><span className="font-bold text-sm">Phone Number:</span> &nbsp;&nbsp;&nbsp;{job.phone}</p>
      <p className="text-[0.7rem] italic"><span className="font-bold text-sm">Job Duration:</span> &nbsp;&nbsp;&nbsp;{job.jobduration} in months</p>
      <hr/>
<div className="w-full py-2 px-1 space-y-2">
{parse(job.jobdesc)}
   </div>
      </div>
    )
  }
  
  export default JobDetail