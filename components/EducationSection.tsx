interface EducationItem {
    level: number,
    levelTitle: string
    levelTitleTH: string,
    majorTitle: string,
    majorTitleTH: string,
    institute: string,
    degree: string,
    yearGrad: string,
    researchTitle?: string,
    researchFields?: Array<any>
    researchTools?: Array<any>,
    researchUrls?: string
}


interface EducationProps { work: Array<EducationItem> }

function EducationSection({ work }: EducationProps) {
    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <div>
                <h6 className='text-center text-3xl font-bold'>Education Experience</h6>
                {
                    work.map(workItems => {
                        return (
                            <div>
                                {workItems.degree}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default EducationSection;