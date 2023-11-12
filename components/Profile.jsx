import { getTokenData } from '@/helpers/getTokenData';
import Image from 'next/image'
import Link from 'next/link';
import ResumeOpener from './ResumeOpener';

const Profile = async () => {
    const token = await getTokenData();
    const resp =  await fetch(`http://localhost:3000/api/getuser?id=${token.id}`,{
      method:'GET'
    });
    const mainData = await resp.json();
  return (
<section className="pt-4 bg-blue-500 font-montserrat ">
<div className="w-full lg:w-1/2  px-4 mx-auto">
  <div className=" relative flex flex-col min-w-0 break-words bg-blue-900 w-full mb-2 shadow-xl rounded-lg mt-2">
    <div className="px-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 flex justify-center">
          <div className="my-2">
            <Image src={token.image} width={250} height={250} alt='profile...' className='h-32 w-32 object-cover rounded-full shadow-lg'/>
          </div>
        </div>
        <div className="text-center mt-5">
        <h3 className="text-xl uppercase font-bold leading-normal mb-2 text-blueGray-700">
          {token.username}
        </h3>
        {mainData.getUserD.resume && <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">Your email: {mainData.getUserD.email}</div>}
      </div>
        <div className="w-full px-4 text-center mt-4">
        <Link href={'/buildresume'} className="button w-full">{mainData.getUserD.resume? "Update Resume":"Create Resume"}</Link>
        {mainData.getUserD.resume && <ResumeOpener showResumeBool={mainData.getUserD.resume} />}
        </div>
      </div>
      <div className="mt-3 py-4 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
          {mainData.getUserD.resume && <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
              Your resume will show when you click on the preview resume😊
            </p>}
            {!mainData.getUserD.resume && <p className="mb-4 text-lg leading-relaxed text-yellow-500">
                Create your resume to see more content help😎
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  )
}

export default Profile