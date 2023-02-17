export type TechSkillTypeList = "language" | "backend" | "frontend" | "database" | "other"

export interface TechSkill {
    skillId: string
    skillTitle: string
    type: TechSkillTypeList
    level: number
}
export type TechSkills = TechSkill[]

type LanguageSkillsLevelList = "beginner" | "intermediate" | "advanced" | "expert" | "native"

export interface LanguageSkill {
    languageTitle: string
    level: LanguageSkillsLevelList
}
export type LanguageSkills = LanguageSkill[]
