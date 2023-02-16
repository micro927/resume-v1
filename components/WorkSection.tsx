import { useState, useEffect } from 'react'
import WorkCard from './WorkCard'
import { Work, WorkItem } from '../global/Work.interface'
import WorkSelectorBar from './WorkSelectorBar'

interface Props { work: Work }
function WorkSection({ work }: Props): JSX.Element {
    const workList = work.reverse()
    const [WorkItem, setWorkItemState] = useState<WorkItem>(workList.find((workItem: WorkItem) => workItem.dateEnd === '') ?? work[0])
    const [workJobNo, setWorkJobNo] = useState<number>(workList.length - 1)

    function clickWorkSelector(no: number) {
        setWorkJobNo(no)
    }

    useEffect(() => {
        const workItem = workList.find((workItem: WorkItem) => workItem.jobNo === workJobNo) ?? work[0]
        setWorkItemState(workItem)
    }, [workJobNo]);


    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <h6 className='text-center text-3xl font-bold'>Work Experience</h6>
            <div className='flex justify-center my-5'>
                <WorkSelectorBar work={workList} clickWorkSelector={clickWorkSelector} />
            </div>
            <WorkCard workItem={WorkItem} />
        </section>
    );
}

export default WorkSection;