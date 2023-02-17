import { FaJsSquare } from "react-icons/fa";
import { TechSkills, TechSkill, TechSkillTypeList, LanguageSkills } from "../global/Skill.interface"

interface Props {
    techSkills: TechSkills
    languageSkills?: LanguageSkills
}

function SkillsSection({ techSkills }: Props) {
    const techskillTypeList: TechSkillTypeList[] = ["language", "backend", "frontend", "database", "other"]
    return (
        <section id='skills' className='flex flex-col w-full scroll-mt-16 mb-12'>
            <h6 className='text-center text-3xl font-bold'>Skills</h6>
            <div className="lg:flex flex-row w-full justify-around my-12">
                {techskillTypeList.map(techSkillType => {
                    const thisTypeSkills = techSkills.filter((techSkill: TechSkill) => techSkill.type === techSkillType)
                    return (
                        <div key={techSkillType} className="flex flex-col w-2/3">
                            <p className="text-xl capitalize mb-4 font-bold">{techSkillType}</p>
                            {thisTypeSkills.map(skill => {
                                return (
                                    <div key={skill.skillTitle} className="flex items-start mb-3"><FaJsSquare className="mr-2" /> {skill.skillTitle}</div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default SkillsSection;