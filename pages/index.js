import Image from 'next/image'
import paint1 from '@/public/paint1.jpeg'
import paint2 from '@/public/paint2.jpeg'
import paint3 from '@/public/paint3.jpg'
import paint4 from '@/public/paint4.jpg'
import { Inter } from 'next/font/google'
import {useRef} from "react";
import { BsInstagram, BsTwitter, BsFacebook,BsLinkedin} from "react-icons/bs";
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import Navbar from "@/components/navbar"
// import ParticleWrapper from '@/components/particles'
const inter = Inter({ subsets: ['latin'] })
import { Montserrat, Bitter } from "next/font/google"

const bitter = Bitter({ weight: "400", subsets: ["latin"] })
const bitter_b = Bitter({ weight: "700", subsets: ["latin"] })
const monst = Montserrat({ weight: "700", subsets: ["latin"] })
export default function Home() {
  const sectionRef=useRef()
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col grow items-center justify-center bg-gray-800 text-white">
          <span style={monst.style} className="leading-tight text-4xl sm:text-7xl font-bold tracking-wider text-center">FINE ARTS AND <br />
            PHOTOGRAPHY <br />SOCIETY DB</span>
          <MdOutlineKeyboardArrowDown onClick={()=>sectionRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})} className="absolute cursor-pointer animate-bounce bottom-0 text-gray-400 hover:text-gray-200 transition delay-75" size={64}/>
        </div>
      </div>

      <div ref={sectionRef} style={bitter.style} className='bg-[#3A3A3A] flex flex-col min-h-screen items-center  text-center text-white pt-32 pl-6 pr-6 gap-6'>
        <span className="text-3xl lg:mr-[19rem] lg:ml-[19rem]"><i>The <i className={bitter_b.className}>Fine Arts and Photography Society - FAPS DB</i>  is the creative hub of Thapar Institue of Engineering and Technology, Patiala.</i></span>
        <span className="text-3xl text-center lg:mr-[14rem] lg:ml-[14rem] ">FAPS is a vibrant society that unites the diverse talents in the campus, providing a creative space for collaboration, expression, learning and blending together to form a distinct artisty of its own.</span>
        <span className="text-xl lg:mr-[16rem] lg:ml-[16rem]"><i>It is grooming the engineering and management graduates of  TIET to explore their creativity and converse through the medium of art.</i></span>
        <div className="flex flex-row justify-center items-center gap-2 mb-2">
          <div className="grid grid-rows-3 gap-2">
          <Image width={130} height={130} src={paint2} alt="" />
          <Image  width={130} height={130} src={paint3} alt=""  />
          <Image width={130} height={130} src={paint1} alt="" />
          </div>
          <Image width={400} height={400} src={paint4} alt=""  />
          <div className="grid grid-rows-3 gap-2">
          <Image width={130} height={130} src={paint2} alt="" />
          <Image  width={130} height={130} src={paint3} alt=""  />
          <Image width={130} height={130} src={paint1} alt="" />
          </div>
        </div>
      </div>

      <div className='flex flex-row items-center text-white p-2 bg-[#2c2c2c]'> 
        <div className='justify-self-start '>Made with ❤️ by MLSC DB</div>
        {/* <button className='items-end rounded-lg border-2 p-2'>Follow us</button> */}
        <div className='grow'/>
        <span className="flex flex-row gap-2">
          <button className='items-end rounded-lg border-2 p-2 '><BsInstagram></BsInstagram></button>
          <button className='items-end rounded-lg border-2 p-2 '><BsTwitter></BsTwitter></button>
          <button className='items-end rounded-lg border-2 p-2 '><BsFacebook></BsFacebook></button>
          <button className='items-end rounded-lg border-2 p-2 '><BsLinkedin></BsLinkedin></button>
          </span>
      </div>

    </>


  );
}
