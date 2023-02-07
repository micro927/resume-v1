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

                    work.map(workItems => {
                        const jobNo = "job" + workItems.jobno
                        const dateStart = (new Date(workItems.dateStart)).toLocaleDateString("en", {
                            month: "long",
                            year: "numeric",
                        })
                        const dateEnd = workItems.dateEnd == '' ? "Present" : (new Date(workItems.dateEnd)).toLocaleDateString("en", {
                            month: "long",
                            year: "numeric",
                        })

                        return (
                            <div id={jobNo}>
                                <h3 className="text-lg">
                                    {workItems.jobTitle} | {workItems.organization}
                                </h3>
                                <h6>{dateStart} - {dateEnd}</h6>
                                <ul>
                                    {workItems.descriptionList.map((description, key) => {
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