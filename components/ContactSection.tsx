interface ContactProps {
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

function ContactSection({ personalInformation }: ContactProps) {
    return (
        <section id='contact' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <div>
                <h6 className='text-center text-3xl font-bold'>Contact Me</h6>
                {personalInformation.email}
            </div>
        </section>
    );
}

export default ContactSection;