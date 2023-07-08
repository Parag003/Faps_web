import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar"
// import ParticleWrapper from '@/components/particles'
const inter = Inter({ subsets: ['latin'] })
import { Montserrat, Bitter } from "next/font/google"

const bitter = Bitter({weight:"400", subsets:["latin"]})
const bitter_b = Bitter({weight:"700", subsets:["latin"]})
const monst = Montserrat({ weight: "700", subsets: ["latin"] })
export default function Events() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col grow items-center justify-center bg-gray-800 text-white">
          <span style={monst.style} className="leading-tight text-7xl font-bold tracking-wider text-center">Events</span>
        </div>
      </div>
     
        <div style={bitter_b.style} className='bg-[#3A3A3A] flex flex-col min-h-screen items-center  text-center text-white pt-32 pl-6 pr-6 gap-6'>
          <span className="text-3xl">Upcoming Events</span>
          <span className="text-sm">Coming soon...</span>
        </div>

     </>


  )
}