import { useState, useEffect } from 'react'
import { FaCode, FaFileAlt } from 'react-icons/fa'
import WorkCard from './WorkCard'
import { WorkItem, WorkSelectorItem } from '../global/Work.interface'

interface WorkProps { work: Array<WorkItem> }
function WorkSection({ work }: WorkProps) {

    const workList = work.reverse()
    const [WorkItem, setWorkItemState] = useState<WorkItem>(workList.find(workItem => workItem.dateEnd === '') ?? work[0])
    const [workSelector, setWorkSelector] = useState<Array<WorkSelectorItem>>(workList.map(item => {
        return {
            jobNo: item.jobNo,
            jobField: item.jobField,
            dateStart: item.dateStart,
            dateEnd: item.dateEnd,
            isSelected: item.dateEnd === ''
        }
    }))

    function handleClickWorkIcon(no: number) {
        setWorkSelector(prevWorkSelectorState => {
            return (
                prevWorkSelectorState.map(item => {
                    return {
                        ...item,
                        isSelected: item.jobNo === no
                    }
                })
            )
        })
    }

    useEffect(() => {
        const WorkCard = workList.find(workItem => workItem.jobNo === workSelector?.find(workSelectorItem => workSelectorItem.isSelected)?.jobNo) ?? work[0]
        setWorkItemState(WorkCard)
    }, [workSelector]);

    const IconList = {
        programming: FaCode,
        nonprogramming: FaFileAlt
    }

    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <h6 className='text-center text-3xl font-bold'>Work Experience</h6>
            <div className='flex justify-center my-5'>
                {
                    workSelector.map(item => {
                        const buttonClass = item.isSelected ? 'bg-green-500 scale-125' : 'bg-slate-500 '
                        const IconComponent = item.jobField === 'none' ? IconList.nonprogramming : IconList.programming
                        return (
                            <button key={`job-${item.jobNo}`} type='button' onClick={() => { handleClickWorkIcon(item.jobNo) }} className={`flex mx-5 justify-center align-middle rounded-lg p-2 text-2xl text-white hover:scale-125 hover:bg-green-600 duration-300 ease-out ${buttonClass}`}>
                                <IconComponent />{''}
                            </button>
                        )
                    })
                }
            </div>
            <WorkCard workItem={WorkItem} />
        </section>
    );
}

export default WorkSection;