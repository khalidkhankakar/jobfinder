'use client'
import { getDeleteToken } from "@/helpers/getDeleteToken";
import { getTokenData } from "@/helpers/getTokenData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [tokenData, setTokenData] = useState(null);
    useEffect(() => {
        const gettingTokenData = async () => { 
            const token = await getTokenData()
            setTokenData(token)
           }
           gettingTokenData()
    }, [])

    const handleLogout = async () => {
        const deleteToken = await getDeleteToken();
        const token = await getTokenData()
        setTokenData(null)
     }

  return (
    <>
    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center justify-around bg-blue-800 py-3 border-b  ">
    <div className="flex items-center space-x-4  ">
            <h1 className="text-2xl font-bold font-nabla ml-4 ">jf.</h1>
            <Image src={'/sunflower.png'} width={50} height={50} alt="logo" className="object-contain h-10 w-10"/>
            <Link href={'/'} className="font-montserrat text-md  text-white ">Find jobs</Link>
            <Link href={'/companies'} className="font-montserrat text-md  text-white ">Company reviews</Link>
        </div>
        {
            tokenData === null ?
            <div  className=" flex items-center justify-between space-x-2 mx-3">
                <Link href="/signup" className="button w-fit">Sign up</Link>
                <Link href="/login" className="button w-fit">Login</Link>
                <Link href={"/build/employer"}  className="font-montserrat text-md py-1 px-2 hover:bg-blue-900 text-white rounded-md hover:font-semibold">Employeers/Post job</Link>
            </div>  :

            <div>
            <div  className=" flex items-center justify-between space-x-2 mx-3">
                <button className="button w-fit" onClick={handleLogout}>Logout</button>
                <Image src={tokenData.image} width={38} height={38} alt="menu" className=" h-9 w-9 object-fill rounded-full cursor-pointer "/> 
                <Link href={"/build/employer"}  className="font-montserrat text-md py-1 px-2 hover:bg-blue-900 text-white rounded-md hover:font-semibold">Employers/PostJob</Link>
                <Link href={"/profile"}  className="font-montserrat text-md py-1 px-1 hover:bg-blue-900 text-white rounded-md hover:font-semibold">Profile</Link>
                <Link href={"/myjobs"}  className="font-montserrat text-md py-1 px-1 hover:bg-blue-900 text-white rounded-md hover:font-semibold">My Jobs</Link>
            </div>
            </div>
}

    </nav>

    {/* Mobile Navigation */}
    <nav className="flex items-center justify-between md:hidden bg-blue-800 py-3 border-b  ">
        <div className="flex items-center space-x-4  ">
            <h1 className="text-2xl font-bold font-nabla ml-4 ">jf.</h1>
            <Image src={'/sunflower.png'} width={50} height={50} alt="logo" className="object-contain h-10 w-10"/>
        </div>

        {
            tokenData === null ?
            <div  className=" flex items-center justify-between space-x-2 mx-3">
                <Link href="/signup" className="button w-fit">Sign up</Link>
                <Link href="/login" className="button w-fit">Login</Link>
                <Image src={toggle?'/hamburger.svg':'/close.svg'} width={38} height={38} alt="menu" className=" p-2 object-contain  text-white  rounded-md hover:bg-indigo-600 cursor-pointer " onClick={()=>{setToggle((prev)=> !prev)}} />
                
            </div>  :

            <div>
            <div  className=" flex items-center justify-between space-x-2 mx-3">
                <button className="button w-fit" onClick={handleLogout}>Logout</button>
                <Image src={tokenData.image} width={38} height={38} alt="menu" className=" h-9 w-9 object-fill rounded-full cursor-pointer "/>
                <Image src={toggle?'/close.svg':'/hamburger.svg'} width={38} height={38} alt="menu" className=" p-2 object-contain  text-white  rounded-md hover:bg-indigo-600 cursor-pointer " onClick={()=>{setToggle((prev)=> !prev)}} />
            </div>
            </div>
        }
    </nav>

    {/* command palate */}
        {toggle && <div className="z-40 flex items-center  flex-col py-2 space-y-2 absolute top-14 right-7  w-56 rounded-md bg-blue-700">
        <Link href={"#"}  className="font-montserrat text-md py-1 px-2 hover:bg-blue-900 text-white rounded-md hover:font-semibold">Profile/Resume</Link>
        <Link href={"/myjobs"}  className="font-montserrat text-md py-1 px-2 hover:bg-blue-900 text-white rounded-md hover:font-semibold">My Jobs</Link>
        <Link href={"/build/employer"}  className="font-montserrat text-md py-1 px-2 hover:bg-blue-900 text-white rounded-md hover:font-semibold">Employers/Post job</Link>
        </div>}
    </>
  )
}

export default Navbar