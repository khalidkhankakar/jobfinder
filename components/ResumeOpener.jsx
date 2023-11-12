'use client'
import Image from "next/image"
import ShowResume from "./ShowResume"
import { useState } from "react"

const ResumeOpener = ({showResumeBool}) => {
    const [open, setOpen] = useState(false)
  return (
    <>
          <button
                type="button"
                className="button w-full my-2"
                onClick={()=>{setOpen((prev)=> !prev)}}
              >Preview CV</button>
    <ShowResume open={open} setOpen={setOpen} />
    </>
  )
}

export default ResumeOpener