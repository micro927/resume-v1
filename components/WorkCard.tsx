import { WorkItem } from '../global/Work.interface'

interface Props { workItem: WorkItem }
function WorkCard({ workItem }: Props): JSX.Element {
    const {
        jobNo,
        jobTitle,
        jobField,
        organization,
        dateStart,
        dateEnd,
        descriptionList,
        tagList
    } = workItem
    const dateStartTitle = (new Date(dateStart)).toLocaleDateString("en", {
        month: "long",
        year: "numeric",
    })
    const dateEndTitle = dateEnd == '' ? "Present" : (new Date(dateEnd)).toLocaleDateString("en", {
        month: "long",
        year: "numeric",
    })

    return (
        <div key={"jobNo-" + jobNo} className='flex flex-col w-100 min-h-[70vh] p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 mb-5'>
            <p className="text-xl lg:text-2xl font-bold mb-1">
                {jobTitle}
            </p>
            <p className='text-sm lg:text-lg text-slate-400 mb-1'>{organization}</p>
            <p className='text-base lg:text-lg text-green-500 mb-1'>{dateStartTitle} - {dateEndTitle}</p>
            <div className='my-6 lg:my-8 ml-4 lg:ml-12'>
                <ul className='flex  flex-col list-disc text-sm lg:text-base'>
                    {descriptionList.map((description, key) => {
                        return (
                            <li className='mt-2 lg:mt-2' key={jobNo + "-" + key}>{description}</li>
                        )
                    })
                    }
                </ul>
            </div>
            <div className='mt-auto ml-4 flex flex-wrap text-xs lg:text-sm text-slate-500 '>
                    {tagList.map(tag => <span key={`tag-${tag}`} className='mr-2'>#{tag}</span>)}
                </div>

        </div>
    );
}

export default WorkCard;