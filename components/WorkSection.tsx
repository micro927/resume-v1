interface WorkItem {
    jobno: string
    jobTitle: string
    organization: string
    dateStart: string
    dateEnd: string
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

                    work.map(workItem => {
                        const jobNo = "job" + workItem.jobno
                        const dateStart = (new Date(workItem.dateStart)).toLocaleDateString("en", {
                            month: "long",
                            year: "numeric",
                        })
                        const dateEnd = workItem.dateEnd == '' ? "Present" : (new Date(workItem.dateEnd)).toLocaleDateString("en", {
                            month: "long",
                            year: "numeric",
                        })

                        return (
                            <div id={jobNo}>
                                <h3 className="text-lg">
                                    {workItem.jobTitle} | {workItem.organization}
                                </h3>
                                <h6>{dateStart} - {dateEnd}</h6>
                                <ul>
                                    {workItem.descriptionList.map((description, key) => {
                                        return (
                                            <li id={"list" + key}>{description}</li>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default WorkSection;