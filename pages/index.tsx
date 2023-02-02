import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WelcomeSection from '../components/WelcomeSection'
import WorkSection from '../components/WorkSection'

const MainPage: NextPage = ({ resumeData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { personalInformation, aboutMe } = resumeData
  return (
    <div>
      <Navbar />
      <main className="flex w-full md:container md:mx-auto px-5 md:px-0">
        <WelcomeSection aboutMe={aboutMe} personalInformation={personalInformation} />
        <WorkSection />
      </main>
      <Footer />
    </div>
  )
}

interface PersonalInformation {
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

type Education = []

interface ResumeData {
  personalInformation: PersonalInformation
  aboutMe: string
  education: Education
  work: object
  skill: object
  language: object
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.HOST}/api/data`)
  const resumeData: ResumeData[] = await res.json()

  return { props: { resumeData } }
}

export default MainPage