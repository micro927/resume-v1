enum TechSkillTypeList {
    language,
    backend,
    frontend,
    database,
    other,
}

export interface TechSkill {
    skillTitle: string
    type: TechSkillTypeList
    level: number
}

export type TechSkills = Array<TechSkill>

enum LanguageSkillsLevelList {
    beginner,
    intermediate,
    advanced,
    expert,
    native
}

export interface LanguageSkill {
    languageTitle: string
    level: LanguageSkillsLevelList
}

export type LanguageSkills = Array<LanguageSkill>
