import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WelcomeSection from '../components/WelcomeSection'
import WorkSection from '../components/WorkSection'

const MainPage: NextPage = ({ resumeData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { personalInformation, aboutMe, work } = resumeData
  return (
    <div>
      <Navbar />
      <main className="w-full min-h-screen container mx-auto px-3">
        <WelcomeSection aboutMe={aboutMe} personalInformation={personalInformation} />
        <WorkSection work={work} />
      </main>
      <Footer />
    </div>
  )
}

interface PersonalInformation {
  name: String
  surname: String
  nameTH: String
  surnameTH: String
  nickname: String
  born: String
  hometown: String
  phone: String
  email: String
  linkedin: String
  github: String
  facebook: String
}

interface EducationItem {
  level: number,
  levelTitle: String
  levelTitleTH: String,
  majorTitle: String,
  majorTitleTH: String,
  institute: String,
  degree: String,
  yearGrad: String,
  researchTitle?: String,
  researchFields?: Array<any>
  researchTools?: Array<any>,
  researchUrls?: String
}
type Education = Array<EducationItem>

interface WorkItems {
  jobno: number
  jobTitle: string
  organization: string
  dateStart: string
  dateEnd: string
  descriptionList: Array<any>
}
type Work = Array<WorkItems>

interface ResumeData {
  personalInformation: PersonalInformation
  aboutMe: string
  education: Education
  work: Work
  skills: any
  language: any
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.HOST}/api/data`)
  const resumeData: ResumeData[] = await res.json()

  return { props: { resumeData } }
}

export default MainPage