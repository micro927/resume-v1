import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import ContactSection from '../components/ContactSection'
import EducationSection from '../components/EducationSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SkillsSection from '../components/SkillsSection'
import WelcomeSection from '../components/WelcomeSection'
import WorkSection from '../components/WorkSection'

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

enum TechSkillTypeList {
  language,
  backend,
  frontend,
  database,
  other,
}

interface TechSkill {
  skillTitle: string
  type: TechSkillTypeList
  level: number
}

type TechSkills = Array<TechSkill>

enum LanguageSkillsLevelList {
  beginner,
  intermediate,
  advanced,
  expert,
  native
}

interface LanguageSkill {
  languageTitle: string
  level: LanguageSkillsLevelList
}

type LanguageSkills = Array<LanguageSkill>

interface ResumeData {
  personalInformation: PersonalInformation
  aboutMe: string
  education: Education
  work: Work
  techSkills: TechSkills
  languageSkills: LanguageSkills
}

const MainPage: NextPage = ({ resumeData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { personalInformation, aboutMe, work, techSkills, languageSkills } = resumeData
  return (
    <div>
      <Navbar />
      <main className="w-full min-h-screen container mx-auto px-3">
        <WelcomeSection aboutMe={aboutMe} personalInformation={personalInformation} />
        <WorkSection work={work} />
        <EducationSection education={work} />
        <SkillsSection techSkills={techSkills} languageSkills={languageSkills} />
        <ContactSection personalInformation={personalInformation} />
      </main>
      <Footer />
    </div>
  )
}


export const getStaticProps: GetStaticProps = async (d) => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/data`)
  const resumeData: ResumeData[] = await res.json()

  return { props: { resumeData } }
}

export default MainPage