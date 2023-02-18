import Link from "next/link";
import { FaAtlas, FaLaptopCode, FaLink, FaUserGraduate } from "react-icons/fa";
import { EducationItem } from "../global/Education.interface";
interface Props { educationItem: EducationItem }
function EducationCard({ educationItem }: Props): JSX.Element {
    const { level, levelTitle, levelTitleTH, majorTitle, majorTitleTH, institute, degree, yearGrad, researchTitle, researchFields, researchTools, researchUrls } = educationItem
    return (
        <div key={"level-" + level} className='w-100 lg:w-[49%] lg:hover:scale-[102%] duration-300 p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 mb-5'>
            <p className="text-lg lg:text-xl font-bold mb-1">
                {levelTitle} ({majorTitle})
            </p>
            <p className='text-sm lg:text-lg text-slate-400 mb-1'>{institute}</p>
            <p className='text-base lg:text-lg font-bold l text-green-500 mb-1'>{yearGrad}</p>
            <div className="mt-5 text-sm lg:text-base">
                {researchTitle && <div className="flex items-start space-x-2 mb-2"><div><FaUserGraduate /></div> <span>{researchTitle}</span></div>}
                {researchFields && <div className="flex items-start space-x-2 mb-2"><div><FaAtlas /></div> <span>{researchFields.join(', ')}</span></div>}
                {researchTools && <div className="flex items-start space-x-2 mb-2"><div><FaLaptopCode /></div> <span>{researchTools.join(', ')}</span></div>}
                {researchUrls && <div className="flex items-start space-x-2 mb-2"><div><FaLink /></div> <Link href={`https://${researchUrls}`} target="_blank">{researchUrls}</Link> </div>}
            </div>
        </div>
    )
}

export default EducationCard;