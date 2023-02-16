import { Education, EducationItem } from "../global/Education.interface";

interface Props { education: Education }
function EducationSection({ education }: Props): JSX.Element {
    return (
        <section id='education' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <h6 className='text-center text-3xl font-bold'>Education</h6>
            {
                education.map(educationItem => {
                    return (
                        <div key={`level-${educationItem.level}`}>{educationItem.degree}</div>
                    )
                })
            }
        </section>
    );
}

export default EducationSection;