'use client'
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const router = useRouter();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true)
      const newData = {
        email: data.email,
        password: data.password,
      }
      const resp = await axios.post("/api/login", newData);
      setData({
        email: '',
        password: '',
      })


      if (resp.data.status === 201) {
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
        router.push("/")
      } else {
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
      }



    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }


  return (
    <>

      <div className="bg-blue-800 flex w-[50%] rounded-lg m-auto my-4 flex-1 flex-col justify-center px-2 py-4 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-6 font-palanquin text-center text-4xl font-bold leading-9 tracking-tight text-white">
            Login to your account
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5 font-montserrat" onSubmit={handleSubmit}>
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
              <button
                type="submit"
                className="button w-full"
                onClick={handleSubmit}
              >
                {loading ? <Image src="/loadingSvg.svg" width={30} height={30} className="h-8 w-8" alt='loading...' /> : 'Login'}
              </button>
            </div>
          </form>
          <p className="mt-3 text-center text-sm text-gray-500">
            <Link href="/signup" className="font-semibold leading-6 text-white hover:text-gray-200">
              Create an account
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

export default Login