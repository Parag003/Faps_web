import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Fap from "@/public/fpp.png"
import { Bitter } from "next/font/google"

const bitter = Bitter({ weight: "400", subsets: ["latin"] })
const Navbar = () => {
  return (
    <div style={bitter.style} className="bg-black flex flex-row text-white h-14 items-center gap-4 p-3">
      <div className="flex flex-row items-center cursor-pointer@">
        <Image width={40} height={40} src={Fap} alt="Faps Logo" />
        <span className='text-2xl ml-2 font-serif hidden sm:block'>FAPS DB</span>
      </div>
      <div className="grow"/>
      <div className="hidden sm:flex flex-row gap-6 items-center">
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/gallery">Gallery</Link>
      <Link href="/team">Team</Link>
      <Link href="/contact">Contact us</Link>
      </div>


    </div>
  )
}

export default Navbar