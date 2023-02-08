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


interface SkillsProps {
    techSkills: Array<TechSkill>
    languageSkills: Array<LanguageSkill>
}

function SkillsSection({ techSkills, languageSkills }: SkillsProps) {
    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <div>
                <h6 className='text-center text-3xl font-bold'>Skills</h6>
                {
                    techSkills.map(skill => {
                        return (
                            <div>
                                {skill.skillTitle}
                            </div>
                        )
                    })
                }
                {
                    languageSkills.map(skill => {
                        return (
                            <div>
                                {skill.languageTitle}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default SkillsSection;