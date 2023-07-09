import React from 'react'
import Image from 'next/image'
import { Montserrat, Bitter } from "next/font/google"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import paint7 from '@/public/paint7.jpg'
import Navbar from '@/components/navbar'

const monst = Montserrat({ weight: "700", subsets: ["latin"] })
const bitter = Bitter({ weight: "400", subsets: ["latin"] })
const bitter_b = Bitter({ weight: "700", subsets: ["latin"] })
export default function Team() {
    const sectionRef=React.useRef();
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex flex-col grow items-center justify-center bg-gray-800 text-white">
                    <span style={monst.style} className="leading-tight text-7xl font-bold tracking-wider text-center">TEAM</span>
                    <MdOutlineKeyboardArrowDown onClick={() => sectionRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })} className="absolute cursor-pointer animate-bounce bottom-0 text-gray-400 hover:text-gray-200 transition delay-75 " size={64} />
                </div>
                
            </div>

            <div style={bitter.style} className='bg-white flex flex-col min-h-screen   text-center text-white pt-32 gap-6'>
                <div ref={sectionRef} className=" flex flex-col sm:flex-row    items-center  justify-evenly gap-2">

                    <div className="flex flex-col gap-4 p-2">
                        <Image src={paint7} width={400} height={400} class="" />
                        <span style={bitter_b.style} className="text-black text-3xl">President</span>
                        <span style={bitter_b.style} className="text-black text-xl">Dr. Priya Alreja</span>
                        <span style={bitter.style} className="text-black text-lg">Professor</span>
                        <span style={bitter.style} className="text-black text-lg">School of Chemistry and Biotechnology</span>
                    </div>
                    <div className="flex flex-col gap-4 p-2">
                        <Image src={paint7} width={400} height={400} class="" />
                        <span style={bitter_b.style} className="text-black text-3xl">Vice President</span>

                        <span style={bitter_b.style} className="text-black text-xl">Dr. Priya Alreja</span>
                        <span style={bitter.style} className="text-black text-lg">Professor</span>
                        <span style={bitter.style} className="text-black text-lg">School of Chemistry and Biotechnology</span>
                    </div>
                </div>

                <div style={bitter_b.style} className="bg-[#3a3a3a] py-7 text-3xl  text-center mb-4 ">
                    General Secretary  2022-2023
                </div>


                <div className='flex flex-col  sm:flex-row gap-4 justify-evenly'>
                    <div className="flex flex-col p-2">
                        <Image src={paint7} width={450} height={450} class="" />
                        <span className="text-black text-2xl  shadow-slate-400 shadow-xl drop-shadow-2xl">Katyayani Jha</span>
                    </div>
                    <div className="flex flex-col p-2">
                        <Image src={paint7} width={450} height={450} class="" />
                        <span className="text-black text-2xl   shadow-slate-400 shadow-xl drop-shadow-2xl">Katyayani Jha</span>
                    </div>
                </div>
                <div style={bitter_b.style} className="bg-[#3a3a3a] py-7 text-4xl  text-center mb-4 ">
                    Executive committee 2023-2024
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-6'>
                    <div className="text-black text-4xl shadow-gray-800 shadow-lg drop-shadow-2xl">
                        <Image src={paint7} alt="" class="" />
                        <span className="">Mr.XYZ Sharma</span>
                    </div>
                    <div className="text-black text-4xl shadow-gray-800 shadow-lg drop-shadow-2xl">
                        <Image src={paint7} alt="" class="" />
                        <span className="">Mr.XYZ Sharma</span>
                    </div>
                    <div className="text-black text-4xl shadow-gray-800 shadow-lg drop-shadow-2xl">
                        <Image src={paint7} alt="" class="" />
                        <span className="">Mr.XYZ Sharma</span>
                    </div>
                    <div className="text-black text-4xl shadow-gray-800 shadow-lg drop-shadow-2xl">
                        <Image src={paint7} alt="" class="" />
                        <span className="">Mr.XYZ Sharma</span>
                    </div>
                    <div className="text-black text-4xl shadow-gray-800 shadow-lg drop-shadow-2xl">
                        <Image src={paint7} alt="" class="" />
                        <span className="">Mr.XYZ Sharma</span>
                    </div>
                    <div className="text-black text-4xl shadow-gray-800 shadow-lg drop-shadow-2xl">
                        <Image src={paint7} alt="" class="" />
                        <span className="">Mr.XYZ Sharma</span>
                    </div>
                    <div className="text-black text-4xl shadow-gray-800 shadow-lg drop-shadow-2xl">
                        <Image src={paint7} alt="" class="" />
                        <span className="">Mr.XYZ Sharma</span>
                    </div>






                </div>




            </div>

        </>
    )
}

