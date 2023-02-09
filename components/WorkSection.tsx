interface WorkItem {
    jobno: number
    jobTitle: string
    organization: string
    dateStart: string
    dateEnd: string
    descriptionList: Array<any>
}

// declare global {
//     interface String {
//         replaceJSX(find: string, replace: string): string[];
//     }
// }
// String.prototype.replaceJSX = function (find: string, replace: string): string[] {
//     return this.split(' ').map((word) => word === find ? replace + ' ' : word + ' ');
// }


interface WorkProps { work: Array<WorkItem> }

function WorkSection({ work }: WorkProps) {
    work.sort()
    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <h6 className='text-center text-3xl font-bold'>Work Experience</h6>
            <div className="w-100 h-full mt-10">
                {

                    work.map(workItem => {
                        const jobNo = "job" + workItem.jobno.toString()
                        const dateStart = (new Date(workItem.dateStart)).toLocaleDateString("en", {
                            month: "long",
                            year: "numeric",
                        })
                        const dateEnd = workItem.dateEnd == '' ? "Present" : (new Date(workItem.dateEnd)).toLocaleDateString("en", {
                            month: "long",
                            year: "numeric",
                        })

                        return (
                            <div className='p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 mb-5'>
                                <div key={jobNo}>
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
                        )
                    })
                }
            </div>
        </section>
    );
}

export default WorkSection;