'use client'
import { getTokenData } from "@/helpers/getTokenData"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import parse from 'html-react-parser';
import { TimeAgo } from "./TimeAgo"

const Card = ({ job }) => {
const handleSave = async () => { 
    let {userId, ...rest} = job;
    const token = await getTokenData();
    userId = token.id;
    const newJob = { userId:token.id, ...rest}
    const {_id,...anotherJobObject}= newJob;

    const resp = await axios.post('/api/savejob', anotherJobObject);
 }
    return (
        <>
            <div className=" p-2 space-y-2 shadow-md text-white bg-blue-900 font-montserrat my-1 border border-white rounded-lg mx-5 md:mx-2 m-auto md:w-[32%] w-full ">
                <div className="logo relative right-0 top-1 block ">
                    <Image onClick={handleSave} src={"/save.svg"} width={10} height={10} className="h-7 w-7" alt="dots" />
                </div>
                <h1 className="text-xl  font-bold ">{job.jobtitle}</h1>
                <h3 className="text-[1rem]  ">{job.company}</h3>
                <Link href={`/jobdetail/${job._id}`} className="button w-fit">Job detail</Link>
                <div className="location flex ">
                    <Image src={"/location.svg"} width={20} height={20} className="h-5 w-5" alt="dots" /> <span className="text-sm"> {job.location}</span>
                </div>

                <div className="flex space-x-4">
                    <div className="location flex ">
                        <Image src={"/forward.svg"} width={20} height={20} className="h-5 w-5" alt="dots" /> <span className="text-sm"> Easy apply</span>
                    </div>
                    <div className="flex ">
                        <Image src={"/clock.svg"} width={20} height={20} className="h-5 w-5" alt="dots" /> <span className="text-sm"> Urgently Hiring</span>
                    </div>
                </div>
                <div className="md:w-1/2 lg:w-full text-sm bg-blue-600 rounded-lg overflow-hidden px-2 py-4">
                {parse(job.jobdesc.substr(0, 190))}<span>....</span> </div>
                <div className="timestamp"><TimeAgo timestamp={job.createdAt} /></div>
            </div>
        </>
    )
}

export default Card