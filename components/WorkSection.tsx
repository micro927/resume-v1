interface WorkItem {
    jobno: Number
    jobTitle: String
    Organization: String
    monthYearStart: String
    monthYeard: String
    descriptionList: Array<any>
}


interface WorkProps { work: Array<WorkItem> }

function WorkSection({ work }: WorkProps) {
    work.sort()
    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <div>
                <h6 className='text-center text-3xl font-bold'>Work Experience</h6>
                {

                    work.map(workItems => {
                        return (
                            <div>
                                {workItems.jobTitle}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default WorkSection;