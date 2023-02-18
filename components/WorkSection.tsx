import { useState, useEffect } from 'react'
import WorkCard from './WorkCard'
import { Work, WorkItem } from '../global/Work.interface'
import WorkSelectorBar from './WorkSelectorBar'

interface Props { work: Work }
function WorkSection({ work }: Props): JSX.Element {
    const workList = work.reverse()
    const [WorkItem, setWorkItemState] = useState<WorkItem>(workList.find((workItem: WorkItem) => workItem.dateEnd === '') ?? workList[0])
    const [workJobNo, setWorkJobNo] = useState<number>(workList.length - 1)

    function clickWorkSelector(no: number) {
        setWorkJobNo(no)
    }

    useEffect(() => {
        const workItem = workList.find((workItem: WorkItem) => workItem.jobNo === workJobNo) ?? workList[0]
        setWorkItemState(workItem)
    }, [workJobNo]);


    return (
        <section id='work' className='flex flex-col w-full min-h-screen scroll-mt-8 md:scroll-mt-16 mb-12'>
            <h6 className='section-header'>Work Experience</h6>
            <div className='flex flex-col my-auto justify-center'>
                <div>
                    <WorkSelectorBar work={workList} clickWorkSelector={clickWorkSelector} />
                    <WorkCard workItem={WorkItem} />
                </div>
            </div>
        </section>
    );
}

export default WorkSection;