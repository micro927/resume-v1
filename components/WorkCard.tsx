import { WorkItem } from '../global/Work.interface'

interface WorkCardProps { workItem: WorkItem }
function WorkCard({ workItem }: WorkCardProps) {

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
        <div id={"jobNo-" + jobNo} className='p-8 lg:p-16 rounded-2xl bg-slate-500 bg-opacity-10 mb-5'>
            <div>
                <p className="text-3xl font-bold mb-1">
                    {jobTitle}
                </p>
                <p className='text-xl text-slate-400 mb-1'>{organization}</p>
                <p className='text-xl text-green-500 mb-1'>{dateStartTitle} - {dateEndTitle}</p>
                <hr className='my-5 border-slate-500 opacity-25' />
                <ul className='list-disc'>
                    {descriptionList.map((description, key) => {
                        return (
                            <li key={jobNo + "-" + key}>{description}</li>
                        )
                    })
                    }
                </ul>
                <div className='mt-24'>
                    {tagList.map(tag => <span key={`tag-${tag}`} className='mr-5'>#{tag}</span>)}
                </div>
            </div>
        </div>
    );
}

export default WorkCard;