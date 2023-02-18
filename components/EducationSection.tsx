import EducationCard from "./EducationCard";
import { Education, EducationItem } from "../global/Education.interface";

interface Props { education: Education }
function EducationSection({ education }: Props): JSX.Element {
    return (
        <section id='education' className='flex flex-col w-full scroll-mt-8 md:scroll-mt-16  mb-12'>
            <h6 className='section-header'>Education</h6>
            <div className="lg:flex justify-between w-100 my-6">
                {
                    education.map((educationItem: EducationItem) => <EducationCard key={educationItem.level} educationItem={educationItem} />)
                }
            </div>
        </section>
    );
}

export default EducationSection;