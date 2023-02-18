import Link from 'next/link';
import { SiGithub, SiLinkedin, SiFacebook, SiMicrosoftoutlook } from 'react-icons/si'
import { PersonalInformation } from "../global/Personal.interface";

interface Props { personalInformation: PersonalInformation }

function ContactSection({ personalInformation }: Props) {
    const { email, linkedin, github, facebook } = personalInformation
    return (
        <section id='contact' className='flex flex-col w-full scroll-mt-8 md:scroll-mt-16 mb-12'>
            <h6 className='section-header'>Contact Me</h6>
            <div className='w-100 lg:w-full mx-auto p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 my-6'>
                <div className='flex flex-col text-sm lg:text-base'>
                    <Link target="_blank" href={`mailto:${email}`}><div className='flex flex-inline space-x-3 mb-3'><div><SiMicrosoftoutlook /></div><div> {email}</div></div></Link>
                    <Link target="_blank" href={`https://${linkedin}`}><div className='flex flex-inline space-x-3 mb-3'><div><SiLinkedin /></div><div> {linkedin}</div></div></Link>
                    <Link target="_blank" href={`https://${facebook}`}><div className='flex flex-inline space-x-3 mb-3'><div><SiFacebook /></div><div> {facebook}</div></div></Link>
                    <Link target="_blank" href={`https://${github}`}><div className='flex flex-inline space-x-3 mb-3'><div><SiGithub /></div><div> {github}</div></div></Link>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;