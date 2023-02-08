import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import EducationSection from '../components/EducationSection'
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
        <EducationSection education={work} />
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

interface EducationItem {
  level: number
  levelTitle: string
  levelTitleTH: string
  majorTitle: string
  majorTitleTH: string
  institute: string
  degree: string
  yearGrad: string
  researchTitle?: string
  researchFields?: Array<any>
  researchTools?: Array<any>
  researchUrls?: string
}
type Education = Array<EducationItem>

interface WorkItem {
  jobno: number
  jobTitle: string
  organization: string
  dateStart: string
  dateEnd: string
  descriptionList: Array<any>
}
type Work = Array<WorkItem>

enum SkillTypeList {
  language,
  backend,
  frontend,
  database,
  other,
}

interface SkillItem {
  skillTitle: string
  type: SkillTypeList
  level: number
}

type Skills = Array<SkillItem>

enum LanguageLevelList {
  beginner,
  intermediate,
  advanced,
  expert,
  native
}

interface LanguageItem {
  languageTitle: string
  level: LanguageLevelList
}

type Language = Array<LanguageItem>

interface ResumeData {
  personalInformation: PersonalInformation
  aboutMe: string
  education: Education
  work: Work
  skills: Skills
  language: Language
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.HOST}/api/data`)
  const resumeData: ResumeData[] = await res.json()

  return { props: { resumeData } }
}

export default MainPage