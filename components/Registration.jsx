'use client'
import { getPhoto, uploadPhoto } from '@/actions/uploadPhoto';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
  email:'',
  name:'',
  password:'',
  cpassword:''
});
const [loading, setLoading] = useState(false);
const [shownoti, setShownoti] = useState(false);
const handleSubmit = async (e) => { 
  e.preventDefault();
  setLoading(true)
  const formData = new FormData();
  formData.append('file', file);
  const res = await uploadPhoto(formData)
  const getRes = await getPhoto();
  const {secure_url} = getRes[0]

  const newData = {
  email:data.email,
  username:data.name,
  password:data.password,
  cpassword:data.cpassword,
  image: secure_url,
  resume: false
  }

  const resp = await axios.post("/api/create", newData);

  setData({
    email:'',
    name:'',
    password:'',
    cpassword:''
  })
  setFile(null)


if(resp.data.status === 201){
  setShownoti(true)
  toast("Account is created successfully", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
  router.push("/login")
  setTimeout(() => {
    setShownoti(false)
  }, 1000);
}else{
  setShownoti(true)
  toast("Invalid credtionals try again", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
  setTimeout(() => {
    setShownoti(false)
  }, 1000);
  setLoading(false)
}



}

const handleChange = (e) => { 
  setData({
    ...data,
    [e.target.name]: e.target.value
  });
 }
 const handleFileChange = (event) => {
   const image = event.target.files[0];
   if (image) {
    const fileExtension = image.name.split('.').pop().toLowerCase();
    if (['png', 'jpg', 'jpeg'].includes(fileExtension)) {
    if (image.size <= 1024 * 1024) {
      setFile(image)
    } else {
      alert('Image size exceeds 1 MB. Please choose a smaller image.');
      event.target.value = null; // Reset the input field
    
    }
  }else{
    alert('Unsupported file type. Please choose a PNG, JPG, or JPEG image.');
        event.target.value = null; // Reset the input field
  }
  }
 };

 
  return (
    <>
    
      <div className="bg-blue-800 flex w-[50%] rounded-lg m-auto my-4 flex-1 flex-col justify-center px-2 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 font-palanquin text-center text-4xl font-bold leading-9 tracking-tight text-white">
            Create your account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form encType="multipart/form-data"  className="space-y-5 font-montserrat" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={data.email}
                  required
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  value={data.name}
                  type="text"
                  onChange={handleChange}
                  required
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Profile picture
              </label>
              <div className="text-sm text-yellow-300  ">upload image less than 1 mb image extension: [PNG, JPEG, JPG]</div>
              <div className="mt-1">
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={handleFileChange}
                  accept="image/png, image/jpeg, image/jpg"
                  required
                  className="block bg-blue-500 outline-none text-white w-full rounded-md file:bg-blue-500 file:text-white file:border-2 file:rounded-md cursor-pointer file:border-white  py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={handleChange}
                  value={data.password}
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                  Confrim password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  required
                  value={data.cpassword}
                  onChange={handleChange}
                  className="block bg-blue-500 outline-none text-white w-full rounded-md border-0 py-1.5 px-2 shadow-sm placeholder:text-white   sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                {loading?'Sign in...':'Sign in'}
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-500">
            <Link href="/login" className="font-semibold leading-6 text-white hover:text-gray-200">
              Login to your account
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default Registration