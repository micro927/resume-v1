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
        <div id={"jobNo-" + jobNo} className='flex flex-col w-100 min-h-max p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 mb-5'>
            <p className="text-2xl font-bold mb-1">
                {jobTitle}
            </p>
            <p className='text-lg text-slate-400 mb-1'>{organization}</p>
            <p className='text-lg text-green-500 mb-1'>{dateStartTitle} - {dateEndTitle}</p>
            <div className='my-8 ml-4 lg:ml-12'>
                <ul className='list-disc'>
                    {descriptionList.map((description, key) => {
                        return (
                            <li key={jobNo + "-" + key}>{description}</li>
                        )
                    })
                    }
                </ul>
                <div className='mt-auto pt-10 text-sm text-slate-500'>
                    {tagList.map(tag => ` #${tag} `)}
                </div>
            </div>

        </div>
    );
}

export default WorkCard;