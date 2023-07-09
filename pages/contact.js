import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar"
import { Separator } from "@/components/ui/separator"
// import ParticleWrapper from '@/components/particles'
const inter = Inter({ subsets: ['latin'] })
import { Montserrat, Bitter } from "next/font/google"
import Link from "next/link"
const bitter = Bitter({ weight: "400", subsets: ["latin"] })
const bitter_b = Bitter({ weight: "700", subsets: ["latin"] })
const monst = Montserrat({ weight: "700", subsets: ["latin"] })
export default function Contact() {
    return (
        <>
            <div className="flex flex-col h-[45vh]">
                <Navbar />
                <div className="flex flex-col grow items-center justify-center bg-gray-800 text-white">
                    <span style={monst.style} className="leading-tight text-4xl sm:text-7xl font-bold tracking-wider text-center">Contact us</span>
                </div>
            </div>

            <div style={bitter.style} className='bg-[#3A3A3A] flex flex-col items-center  text-center text-white pt-32 pl-6 pr-6 gap-9'>
                <span style={bitter_b.style} className="text-xl">Send us your artworks and photographs here:  entriesfaps@gmail.com</span>
                <Link href="https://www.instagram.com/fapstietdb" style={bitter_b.style} className="text-xl">Facebook -  @fapstietdb</Link>
                <Link href="https://www.instagram.com/fapstietdb" style={bitter_b.style} className="text-xl">Instagram -  @fapstietdb</Link>
            </div>

        </>


    )
}