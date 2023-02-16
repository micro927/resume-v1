import { TechSkill, LanguageSkill, TechSkills, LanguageSkills } from "../global/Skill.interface"

interface Props {
    techSkills: TechSkills
    languageSkills: LanguageSkills
}

function SkillsSection({ techSkills, languageSkills }: Props) {
    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>

            <h6 className='text-center text-3xl font-bold'>Skills</h6>
            {
                techSkills.map((skill: TechSkill) => {
                    return (
                        <div key={`skill-${skill.skillTitle}`}>
                            {skill.skillTitle}
                        </div>
                    )
                })
            }
            {
                languageSkills.map((skill: LanguageSkill) => {
                    return (
                        <div key={`lang-${skill.languageTitle}`}>
                            {skill.languageTitle}
                        </div>
                    )
                })
            }
        </section>
    );
}

export default SkillsSection;