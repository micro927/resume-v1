import { useState, useEffect } from 'react'
import { FaCode, FaFileAlt } from 'react-icons/fa'
import { Work, WorkItem, WorkSelector, WorkSelectorItem } from '../global/Work.interface'

interface Props {
    work: Work,
    clickWorkSelector: Function
}
function WorkSelectorBar({ work, clickWorkSelector }: Props): JSX.Element {
    const [workSelector, setWorkSelector] = useState<WorkSelector>(work.map((item: WorkItem) => {
        return {
            jobNo: item.jobNo,
            jobField: item.jobField,
            dateStart: item.dateStart,
            dateEnd: item.dateEnd,
            isSelected: item.dateEnd === ''
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
                    const buttonClass = item.isSelected ? 'bg-green-500 scale-110' : 'bg-slate-500 scale-95'
                    const IconComponent = item.jobField === 'none' ? IconList.nonprogramming : IconList.programming
                    return (
                        <div key={`job-${item.jobNo}`} className='flex justify-center relative'>
                            <button  type='button' data-tooltip-target="tooltip-top" data-tooltip-placement="top" onClick={() => { handleClickWorkSelector(item.jobNo) }} className={`flex peer justify-center align-middle rounded-lg p-2 text-lg lg:text-2xl text-white hover:scale-[120%] hover:bg-green-700 duration-300 ease-out ${buttonClass}`}>
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