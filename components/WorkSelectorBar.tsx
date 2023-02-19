import { useState, useEffect } from 'react'
import { FaCode, FaFileAlt } from 'react-icons/fa'
import { Work, WorkItem, WorkSelector, WorkSelectorItem } from '../global/Work.interface'

interface Props {
    work: Work,
    clickWorkSelector: Function
}
function WorkSelectorBar({ work, clickWorkSelector }: Props): JSX.Element {
    const [workSelector, setWorkSelector] = useState<WorkSelector>(work.map((item: WorkItem) => {
        const { jobNo, jobField, dateStart, dateEnd } = item
        return {
            jobNo,
            jobField,
            dateStart,
            dateEnd,
            isSelected: dateEnd === ''
        }
    }))

    function handleClickWorkSelector(no: number): void {
        setWorkSelector(prevWorkSelectorState => {
            return (
                prevWorkSelectorState.map((item): WorkSelectorItem => {
                    return {
                        ...item,
                        isSelected: item.jobNo === no
                    }
                })
            )
        })
        clickWorkSelector(no)
    }
    const IconList = {
        programming: FaCode,
        nonprogramming: FaFileAlt
    }
    return (
        <div className='flex justify-center md:justify-start space-x-4 my-5'>
            {
                workSelector.map((item: WorkSelectorItem) => {
                    const { isSelected, jobNo, jobField, dateStart, dateEnd } = item
                    const buttonClass = isSelected ? 'bg-green-500 scale-110' : 'bg-slate-500 scale-95'
                    const IconComponent = jobField === 'none' ? IconList.nonprogramming : IconList.programming
                    return (
                        <div key={`job-${jobNo}`} className='flex justify-center relative'>
                            <button type='button' onClick={() => { handleClickWorkSelector(jobNo) }} className={`flex peer justify-center align-middle rounded-lg p-2 text-lg lg:text-2xl text-white hover:scale-[120%] hover:bg-green-700 duration-300 ease-out ${buttonClass}`}>
                                <span><IconComponent />{''}</span>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default WorkSelectorBar;