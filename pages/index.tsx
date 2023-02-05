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
      <main className="w-full min-h-screen container mx-auto px-3">
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
  facebook: string
}

type Education = []

interface ResumeData {
  personalInformation: PersonalInformation
  aboutMe: string
  education: Education
  work: any
  skills: any
  language: any
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.HOST}/api/data`)
  const resumeData: ResumeData[] = await res.json()

  return { props: { resumeData } }
}

export default MainPage