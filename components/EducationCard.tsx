import Link from "next/link";
import { FaAtlas, FaLaptopCode, FaLink, FaUserGraduate } from "react-icons/fa";
import { EducationItem } from "../global/Education.interface";
interface Props { educationItem: EducationItem }
function EducationCard({ educationItem }: Props): JSX.Element {
    const { level, levelTitle, levelTitleTH, majorTitle, majorTitleTH, institute, degree, yearGrad, researchTitle, researchFields, researchTools, researchUrls } = educationItem
    return (
        <div key={"level-" + level} className='w-100 lg:w-[49%] hover:scale-[102%] duration-300 p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 mb-5'>
            <p className="text-xl font-bold mb-1">
                {levelTitle} ({majorTitle})
            </p>
            <p className='text-lg text-slate-400 mb-1'>{institute}</p>
            <p className='text-lg text-green-500 mb-1'>{yearGrad}</p>
            <div className="mt-5">
                {researchTitle && <div className="flex items-start lg:items-center mb-2"><div><FaUserGraduate className="text-lg mr-2" /></div> {researchTitle}</div>}
                {researchFields && <div className="flex items-start lg:items-center mb-2"><div><FaAtlas className="text-lg mr-2" /></div> <span>{researchFields.join(', ')}</span></div>}
                {researchTools && <div className="flex items-start lg:items-center mb-2"><div><FaLaptopCode className="text-lg mr-2" /></div> <span>{researchTools.join(', ')}</span></div>}
                {researchUrls && <div className="flex items-start lg:items-center mb-2"><div><FaLink className="text-lg mr-2" /></div> <Link href={`https://${researchUrls}`} target="_blank">{researchUrls}</Link> </div>}
            </div>
        </div>
    )
}

export default EducationCard;