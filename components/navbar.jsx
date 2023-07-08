import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Fap from "@/public/fpp.png"
const Navbar = () => {
  return (
    <div className="bg-black flex flex-row text-white h-14 items-center gap-9 p-3">
      <div className="flex flex-row items-center">
        <Image width={40} height={40} src={Fap} alt="Faps Logo" />
        <span className='text-2xl ml-2 font-serif hidden sm:block'>FAPS DB</span>
      </div>
      <div className="grow"/>
      <div className="hidden sm:flex flex-row gap-9 items-center">
      <Link href="#">Home</Link>
      <Link href="#">Events</Link>
      <Link href="#">Gallery</Link>
      <Link href="#">Team</Link>
      <Link href="#">Contact us</Link>
      </div>


    </div>
  )
}

export default Navbar