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
        <>
            {
                workSelector.map((item: WorkSelectorItem) => {
                    const buttonClass = item.isSelected ? 'bg-green-500 scale-110' : 'bg-slate-500 scale-95'
                    const IconComponent = item.jobField === 'none' ? IconList.nonprogramming : IconList.programming
                    return (
                        <button key={`job-${item.jobNo}`} type='button' onClick={() => { handleClickWorkSelector(item.jobNo) }} className={`flex ml-4 justify-center align-middle rounded-lg p-2 text-2xl text-white hover:scale-125 hover:bg-green-700 duration-300 ease-out ${buttonClass}`}>
                            <IconComponent />{''}
                        </button>
                    )
                })
            }
        </>
    );
}

export default WorkSelectorBar;