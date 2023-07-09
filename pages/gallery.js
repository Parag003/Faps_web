import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar"
import { Separator } from "@/components/ui/separator"
// import ParticleWrapper from '@/components/particles'
const inter = Inter({ subsets: ['latin'] })
import { Montserrat, Bitter } from "next/font/google"

const bitter = Bitter({ weight: "400", subsets: ["latin"] })
const bitter_b = Bitter({ weight: "700", subsets: ["latin"] })
const monst = Montserrat({ weight: "700", subsets: ["latin"] })
export default function Events() {
  return (
    <>
      <div className="flex flex-col h-[60vh]">
        <Navbar />
        <div className="flex flex-col grow items-center justify-center bg-gray-800 text-white">
          <span style={monst.style} className="leading-tight text-4xl sm:text-7xl font-bold tracking-wider text-center">Gallery</span>
        </div>
      </div>

      <div style={bitter.style} className='bg-[#3A3A3A] flex flex-col items-center  text-center text-white pt-32 pl-6 pr-6 gap-6'>
        <span style={monst.style} className="text-4xl">Artworks</span>
        <Separator className="bg-gray-600 w-[18rem] md:w-[40rem] sm:w-[20rem] lg:w-[60rem]" />
      </div>

      <div className="bg-[#3A3A3A] flex flex-col min-h-screen items-center p-5">
        <div className="columns-2 gap-4">
          <Image className="mb-4" width={600} height={600} src="/paint7.jpg" />
          <Image className="mb-4" width={600} height={600} src="/paint8.jpg" />
          <Image className="mb-4" width={600} height={600} src="/paint9.jpg" />
          <Image className="mb-4" width={600} height={600} src="/paint7.jpg" />
          <Image className="mb-4" width={600} height={600} src="/paint8.jpg" />
          <Image className="mb-4" width={600} height={600} src="/paint9.jpg" />
          <Image className="mb-4" width={600} height={600} src="/paint7.jpg" />
          <Image className="mb-4" width={600} height={600} src="/paint8.jpg" />
          <Image className="mb-4" width={600} height={600} src="/paint9.jpg" />
        </div>

      </div>

    </>


  )
}