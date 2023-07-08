import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar"
// import ParticleWrapper from '@/components/particles'
const inter = Inter({ subsets: ['latin'] })
import { Montserrat, Bitter } from "next/font/google"

const bitter = Bitter({weight:"400", subsets:["latin"]})
const bitter_b = Bitter({weight:"700", subsets:["latin"]})
const monst = Montserrat({ weight: "700", subsets: ["latin"] })
export default function Event() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col grow items-center justify-center bg-gray-800 text-white">
          <span style={monst.style} className="leading-tight text-7xl font-bold tracking-wider text-center">Events</span>
        </div>
      </div>
     
        <div style={bitter.style} className='bg-[#3A3A3A] flex flex-col min-h-screen items-center  text-center text-white pt-32 pl-6 pr-6 gap-6'>
          <span className="text-3xl mr-[19rem] ml-[19rem]"><i>The <i className={bitter_b.className}>Fine Arts and Photography Society - FAPS DB</i>  is the creative hub of Thapar Institue of Engineering and Technology, Patiala.</i></span>
          <span className="text-3xl text-center mr-[14rem] ml-[14rem] ">FAPS is a vibrant society that unites the diverse talents in the campus, providing a creative space for collaboration, expression, learning and blending together to form a distinct artisty of its own.</span>
          <span className="text-xl mr-[16rem] ml-[16rem]"><i>It is grooming the engineering and management graduates of  TIET to explore their creativity and converse through the medium of art.</i></span>
        </div>

     </>


  )
}