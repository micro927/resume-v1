interface WorkItem {
    jobNo: number
    jobTitle: string
    organization: string
    dateStart: string
    dateEnd: string
    descriptionList: Array<any>
}
interface WorkCardProps { workItem: WorkItem }

function WorkCard({ workItem }: WorkCardProps) {

    const jobNo = "job" + workItem.jobNo.toString()
    const dateStart = (new Date(workItem.dateStart)).toLocaleDateString("en", {
        month: "long",
        year: "numeric",
    })
    const dateEnd = workItem.dateEnd == '' ? "Present" : (new Date(workItem.dateEnd)).toLocaleDateString("en", {
        month: "long",
        year: "numeric",
    })
    return (
        <div id={"jobNo-" + jobNo} className='p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 mb-5'>
            <div>
                <h3 className="text-2xl">
                    {workItem.jobTitle} | {workItem.organization}
                </h3>
                <h6>{dateStart} - {dateEnd}</h6>
                <ul>
                    {workItem.descriptionList.map((description, key) => {
                        return (
                            <li key={jobNo + "-" + key}>{description}</li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    );
}

export default WorkCard;