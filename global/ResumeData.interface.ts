import { PersonalInformation } from "./Personal.interface"
import { Education } from "./Education.interface"
import { Work } from "./Work.interface"
import { TechSkills, LanguageSkills } from "./Skill.interface"

export interface ResumeData {
    personalInformation: PersonalInformation
    education: Education
    work: Work
    techSkills: TechSkills
    languageSkills: LanguageSkills
}