interface EducationItem {
    level: number
    levelTitle: string
    levelTitleTH: string
    majorTitle: string
    majorTitleTH: string
    institute: string
    degree: string
    yearGrad: string
    researchTitle?: string
    researchFields?: Array<any>
    researchTools?: Array<any>
    researchUrls?: string
}

interface EducationProps { education: Array<EducationItem> }

function EducationSection({ education }: EducationProps) {
    return (
        <section id='education' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <div>
                <h6 className='text-center text-3xl font-bold'>Education</h6>
                {
                    education.map(educationItem => {
                        return (
                            <div>{educationItem.degree}</div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default EducationSection;