import { log } from 'console'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../public/for-web-001.png'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { GrLinkedinOption } from 'react-icons/gr'
import { MdOutlineEmail } from 'react-icons/md'
import { FaGithub, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

interface WelcomeProps {
    aboutMe: string
    personalInformation: {
        name: string
        surname: string
        nameTH: string
        surnameTH: string
        nickname: string
        born: string
        hometown: string
        phone: string
        email: string
        linkedin: string
        github: string
    }
}
function WelcomeSection({ aboutMe, personalInformation }: WelcomeProps) {
    const { name, surname, nickname, born, hometown } = personalInformation
    const bornDate = new Date(born)
    const bornDateString = bornDate.toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    const myAge = new Date(new Date().getTime() - bornDate.getTime()).getFullYear() - 1970;
    return (
        <section id='welcome' className='flex flex-col w-full min-h-screen'>
            <div className="flex flex-col md:flex-row w-100 min-h-screen md:min-h-max justify-between items-center">
                <div className='flex flex-col justify-center h-1/2 md:h-auto md:w-3/5 p-0 md:p-2 text-center md:text-left'>
                    <h1 className="text-6xl font-bold mt-20 md:mt-0">
                        {name} {surname}
                    </h1>
                    <h5 className='text-xl md:text-3xl mt-5 md:mt-0 text-green-500 font-bold'>
                        Software Developer | Web Developer
                    </h5>
                    <div className='flex space-x-6 mt-3'>
                        <div className='border rounded-lg p-1 bg-white text-2xl text-slate-900'><Link href={"/github"}><FaGithub /></Link> </div>
                        <div className='border rounded-lg p-1 bg-white text-2xl text-slate-900'><Link href={"/github"}><FaLinkedinIn /></Link> </div>
                        <div className='border rounded-lg p-1 bg-white text-2xl text-slate-900'><Link href={"/github"}><FaEnvelope /></Link> </div>
                        <div className='border rounded-lg p-1 bg-white text-2xl text-slate-900'><Link href={"/github"}><FaFacebookF /></Link> </div>
                    </div>
                </div>
                <div className='flex justify-center md:w-2/5 p-0 md:p-0'>
                    <Image
                        src={profilePic}
                        alt="Profile Picture"
                        width={300}
                        quality={100}
                        priority
                    />
                </div>
            </div>
            <div className='p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10'>
                <h6 className='text-center text-3xl font-bold'>About Me</h6>
                <div className="flex flex-col lg:flex-row w-100 h-full md:justify-between items-start text-lg mt-10">
                    <div className='flex flex-col text-sm md:text-base justify-center w-full lg:w-1/2 xl:w-2/5 px-4 md:px-9 order-last md:order-first mt-5 md:mt-0'>
                        <p className='indent-12 text-justify capitalize italic md:not-italic'>
                            “ {aboutMe} ”
                        </p>
                    </div>
                    <div className='flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 px-4'>
                        <div className='flex w-full justify-between px-0 md:px-2 mb-3'>
                            <p className='text-right md:text-left font-bold'>Name</p>
                            <p>{name} {surname} ({nickname})</p>
                        </div>
                        <div className='flex w-full justify-between px-0 md:px-2 mb-3'>
                            <p className='text-right md:text-left font-bold'>Born</p>
                            <p>{bornDateString} ({myAge} Yrs.)</p>
                        </div>
                        <div className='flex w-full justify-between px-0 md:px-2 mb-3'>
                            <p className='text-right md:text-left font-bold'>Hometown</p>
                            <p>{hometown}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default WelcomeSection;