import { log } from 'console'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../public/for-web-001.png'
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
        facebook: string
    }
}
function WelcomeSection({ aboutMe, personalInformation }: WelcomeProps) {
    const { name, surname, nickname, born, hometown, github, email, linkedin, facebook } = personalInformation
    const bornDate = new Date(born)
    const bornDateString = bornDate.toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    const myAge = new Date(new Date().getTime() - bornDate.getTime()).getFullYear() - 1970;
    return (
        <section id='welcome' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <div className="flex flex-col md:flex-row w-100 min-h-screen md:min-h-max justify-between items-center">
                <div className='flex flex-col justify-center h-1/2 md:h-auto md:w-3/5 p-0 md:p-2 text-center md:text-left'>
                    <h1 className="text-6xl font-bold mt-20 md:mt-0">
                        {name} {surname}
                    </h1>
                    <h5 className='text-xl md:text-3xl mt-5 md:mt-3 text-green-500 font-bold'>
                        Software Developer
                    </h5>
                    <div className='flex space-x-6 mt-3 justify-center md:justify-start'>
                        <Link target={"_blank"} href={github}><div className='rounded-lg p-1.5 bg-white text-2xl text-slate-900 hover:scale-125 hover:text-white hover:bg-black duration-300 ease-out'><FaGithub /></div></Link>
                        <Link target={"_blank"} href={linkedin}><div className='rounded-lg p-1.5 bg-white text-2xl text-slate-900 hover:scale-125 hover:text-white hover:bg-linkedin duration-200 ease-in'><FaLinkedinIn /> </div></Link>
                        <Link target={"_blank"} href={"mailto:" + email}><div className='rounded-lg p-1.5 bg-white text-2xl text-slate-900 hover:scale-125 hover:text-white hover:bg-email duration-300'><FaEnvelope /> </div></Link>
                        <Link target={"_blank"} href={facebook}><div className='rounded-lg p-1.5 bg-white text-2xl text-slate-900 hover:scale-125 hover:text-white hover:bg-facebook duration-300'><FaFacebookF /> </div></Link>
                    </div>
                    <div className='hidden text-sm text-slate-300 mt-8'>
                        <p>Swipe down or Jump to</p>
                        <div className='space-x-3 text-green-600 '>
                            <span>About Me</span>
                            <span>Work</span>
                            <span>Education</span>
                            <span>Skill</span>
                            <span>Contact</span>
                        </div>
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
                <div>
                    <h6 className='text-center text-3xl font-bold'>About Me</h6>
                    <div className="flex flex-col lg:flex-row w-100 h-full md:justify-between items-start text-lg mt-10">
                        <div className='flex flex-col text-sm lg:text-base justify-center w-full lg:w-1/2 xl:w-5/12 px-4 order-last lg:order-first mt-5 lg:mt-0'>
                            <p className='indent-12 text-justify capitalize italic lg:not-italic'>
                                {aboutMe}
                            </p>
                        </div>
                        <div className='flex flex-col justify-center w-full lg:w-1/2 xl:w-5/12 px-4 text-sm sm:text-base'>
                            <div className='flex w-full justify-between px-0 md:px-2 mb-3'>
                                <p className='font-bold'>Name</p>
                                <p>{name} {surname} ({nickname})</p>
                            </div>
                            <div className='flex w-full justify-between px-0 md:px-2 mb-3'>
                                <p className='font-bold'>Born</p>
                                <p>{bornDateString} ({myAge} Yrs.)</p>
                            </div>
                            <div className='flex w-full justify-between px-0 md:px-2 mb-3'>
                                <p className='font-bold'>Hometown</p>
                                <p>{hometown}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default WelcomeSection;