import { SiPhp, SiJavascript, SiHtml5, SiCss3, SiPython, SiNodedotjs, SiExpress, SiReact, SiVuedotjs, SiBootstrap, SiJquery, SiMysql, SiDocker } from "react-icons/si";
import { TechSkills, TechSkill, TechSkillTypeList, LanguageSkills } from "../global/Skill.interface"

interface Props {
    techSkills: TechSkills
    languageSkills?: LanguageSkills
}

function SkillsSection({ techSkills }: Props) {
    const skillIcons: any = {
        "php": SiPhp,
        "js": SiJavascript,
        "html": SiHtml5,
        "css": SiCss3,
        "python": SiPython,
        "nodejs": SiNodedotjs,
        "expressjs": SiExpress,
        "reactjs": SiReact,
        "vuejs": SiVuedotjs,
        "bootstrap": SiBootstrap,
        "jquery": SiJquery,
        "mysql": SiMysql,
        "docker": SiDocker
    }
    const techskillTypeList: TechSkillTypeList[] = ["language", "frontend", "backend", "database", "other"]
    return (
        <section id='skills' className='flex flex-col w-full min-h-max scroll-mt-8 md:scroll-mt-16 mb-12'>
            <h6 className='section-header'>Skills</h6>
            <div className="flex flex-row flex-wrap w-full justify-start items-start lg:justify-between p-8 lg:p-16 bg-slate-500 bg-opacity-10 rounded-2xl my-6">
                {techskillTypeList.map(techSkillType => {
                    const thisTypeSkills = techSkills.filter((techSkill: TechSkill) => techSkill.type === techSkillType)
                    return (
                        <div key={techSkillType} className="flex flex-col p-5 mt-4 lg:my-6 w-1/2 md:w-1/3 lg:w-1/6 lg:hover:scale-105 lg:hover:-translate-y-3 lg:hover:rounded-2xl lg:hover:bg-slate-500 lg:hover:bg-opacity-10 duration-300 ">
                            <p className="text-lg lg:text-xl text-green-500 text-left sm:text-left capitalize mb-4 font-bold">{techSkillType}</p>
                            {thisTypeSkills.map(skill => {
                                const ThisIcon = skillIcons[skill.skillId]
                                return (
                                    <div key={skill.skillTitle} className="flex items-start space-x-2 text-sm lg:text-base mb-3"><div><ThisIcon /></div><span>{skill.skillTitle}</span></div>
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