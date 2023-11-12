import Employer from '@/components/Employer'
import JobDescription from '@/components/JobDescription'
import Name from '@/components/Name'
import Phone from '@/components/Phone'

const Resume = ({params}) => {
  return (
    <div>
        {params.slug ==='employer' && <Employer />}
        {params.slug ==='name' && <Name />}
        {params.slug ==='phone' && <Phone />}
        {params.slug ==='job-desc' && <JobDescription />}
    </div>
  )
}

export default Resume