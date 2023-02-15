import { useState, useEffect } from 'react'
import { FaCode, FaFileAlt } from 'react-icons/fa'

interface WorkItem {
    jobno: number
    jobTitle: string
    organization: string
    dateStart: string
    dateEnd: string
    descriptionList: Array<any>
}
interface WorkProps { work: Array<WorkItem> }

function WorkSection({ work }: WorkProps) {
    work.sort(function (job0, job1) { return job1.jobno - job0.jobno })
    const [workCardState, setWorkCardState] = useState(1)


    useEffect(() => {

    }, [workCardState]);
    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <h6 className='text-center text-3xl font-bold'>Work Experience</h6>
            <div className='flex justify-center mt-5'>
                <span className="flex mx-5 items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <FaCode />
                </span>
                <span className="flex mx-5 items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                    <FaFileAlt />
                </span>
            </div>
            <div className="w-100 h-full mt-10">
                <div></div>
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
                            <div key={jobNo} className='p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 mb-5'>
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
                        )
                    })
                }
            </div>
        </section>
    );
}

export default WorkSection;