import Image from 'next/image'
import Link from 'next/link'
import { SiGithub, SiLinkedin, SiFacebook, SiMicrosoftoutlook } from 'react-icons/si'
import { FaUser, FaBirthdayCake, FaHome } from 'react-icons/fa'
import profilePic from '../public/for-web-001.png' // replace 'for-web-001' on 'fake'
import { PersonalInformation } from '../global/Personal.interface'
import { motion } from "framer-motion"

interface Props { personalInformation: PersonalInformation }
function WelcomeSection({ personalInformation }: Props): JSX.Element {
    const { name, surname, nickname, born, hometown, github, email, linkedin, facebook, aboutMe } = personalInformation
    const bornDate = new Date(born)
    const bornDateString = bornDate.toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    const myFullName = (`${name} ${surname}`)
    const myAge = new Date(new Date().getTime() - bornDate.getTime()).getFullYear() - 1970;
    return (
        <section id='welcome' className='flex flex-col w-full min-h-screen justify-center scroll-mt-8 md:scroll-mt-16 mb-12'>

            <div className="flex flex-col md:flex-row min-h-screen md:min-h-0 w-full justify-between items-center">
                <div className='flex flex-col justify-center h-1/2 md:h-auto md:w-3/5 p-0 md:p-2 text-center md:text-left'>
                    <h1 className="text-slate-100 uppercase text-5xl lg:text-6xl font-extrabold mt-20 md:mt-0 select-none">
                        {myFullName}
                    </h1>
                    <h5 className='text-xl md:text-3xl mt-5 md:mt-3 text-green-500 font-bold'>
                        Software Developer
                    </h5>
                    {/* test motion div */}
                    <motion.div
                        initial={{ opacity: 0, top: "50px" }}
                        whileInView={{ opacity: 1, top: "0px" }}
                    >
                        <div className='flex space-x-6 mt-3 justify-center md:justify-start'>
                            <Link target={"_blank"} href={`https://${github}`}><div className='rounded-lg p-1.5 bg-white text-2xl text-slate-900 hover:scale-125 hover:text-white hover:bg-black duration-300'><SiGithub /></div></Link>
                            <Link target={"_blank"} href={`https://${linkedin}`}><div className='rounded-lg p-1.5 bg-white text-2xl text-slate-900 hover:scale-125 hover:text-white hover:bg-linkedin duration-200'><SiLinkedin /> </div></Link>
                            <Link target={"_blank"} href={`mailto:${email}`}><div className='rounded-lg p-1.5 bg-white text-2xl text-slate-900 hover:scale-125 hover:text-white hover:bg-outlook duration-300'><SiMicrosoftoutlook /> </div></Link>
                            <Link target={"_blank"} href={`https://${facebook}`}><div className='rounded-lg p-1.5 bg-white text-2xl text-slate-900 hover:scale-125 hover:text-white hover:bg-facebook duration-300'><SiFacebook /> </div></Link>
                        </div>
                    </motion.div>
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
                <div id='profilepic' className='flex justify-center md:w-2/5 mx-0 md:mx-5 lg:mx-0 scroll-m-[-3rem]'>
                    <Image
                        src={profilePic}
                        alt="Profile Picture"
                        width={300}
                        quality={100}
                        priority
                    />
                </div>
            </div>
            <div className='p-4 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10'>
                <div>
                    <div id='aboutme' className="flex flex-col lg:flex-row w-100 h-full md:justify-between items-center scroll-mt-8 md:scroll-mt-16">
                        <div className='flex flex-col text-sm lg:text-base justify-center w-full lg:w-1/2 xl:w-5/12 px-4 order-last lg:order-first'>
                            <h6 className='text-center text-lg font-bold mb-5 mt-10 lg:mt-0'>About Me</h6>
                            <p className='indent-12 lg:text-justify capitalize'>
                                {aboutMe}
                            </p>
                        </div>
                        <div className='flex flex-col justify-center w-full lg:w-1/2 xl:w-5/12 px-4 text-sm sm:text-base mt-10 lg:mt-0  '>
                            <div className='flex w-full justify-between items-center px-0 md:px-2 mb-3'>
                                <span className='flex items-center text-base lg:text-lg font-bold'><FaUser className='mr-1 text-slate-500' /> <span>Name</span></span>
                                <span>{name} {surname} ({nickname})</span>
                            </div>
                            <div className='flex w-full justify-between items-center px-0 md:px-2 mb-3'>
                                <span className='flex items-center text-base lg:text-lg font-bold'><FaBirthdayCake className='mr-1 text-slate-500' /> <span>Born</span></span>

                                <p>{bornDateString} ({myAge} Yrs.)</p>
                            </div>
                            <div className='flex w-full justify-between items-center px-0 md:px-2 mb-3'>
                                <span className='flex items-center text-base lg:text-lg font-bold'><FaHome className='mr-1 text-slate-500' /> <span>Hometown</span></span>

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