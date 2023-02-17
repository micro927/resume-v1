import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import path from 'path';
import { promises as fs } from 'fs';
// component
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WelcomeSection from '../components/WelcomeSection'
import WorkSection from '../components/WorkSection'
import EducationSection from '../components/EducationSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'
// type & interface
import { ResumeData } from '../global/ResumeData.interface';

const MainPage: NextPage = ({ resumeData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { personalInformation, aboutMe, work, techSkills, languageSkills, education } = resumeData
  return (
    <div>
      <Navbar />
      <main className="w-full min-h-screen container mx-auto px-3">
        <WelcomeSection personalInformation={personalInformation} />
        <WorkSection work={work} />
        <SkillsSection techSkills={techSkills} />
        <EducationSection education={education} />
        <ContactSection personalInformation={personalInformation} />
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const jsonDirectory: String = path.join(process.cwd(), 'json');
  const filePath: Buffer = await fs.readFile(jsonDirectory + '/information.json') ?? {}
  const resumeData: ResumeData = JSON.parse(filePath.toString())
  return { props: { resumeData } }
}

export default MainPage