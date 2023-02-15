import { useState, useEffect } from 'react'
import { FaCode, FaFileAlt } from 'react-icons/fa'
import WorkCard from '../components/WorkCard'
import { WorkItem, WorkSelectorItem } from '../global/Work.interface'


interface WorkProps { work: Array<WorkItem> }
function WorkSection() {

    const workFromProps: Array<WorkItem> = [
        {
            jobNo: 1,
            jobTitle: "Officer (Non Programming Job)",
            jobField: "none",
            organization: "Registration office, Chiang Mai University",
            dateStart: "2015-03-01",
            dateEnd: "2019-08-01",
            descriptionList: []
        },
        {
            jobNo: 0,
            jobTitle: "Full Stack Web Developer",
            jobField: "developer",
            organization: "Registration office, Chiang Mai University",
            dateStart: "2019-09-09",
            dateEnd: "",
            descriptionList: [
                "Develop and design 5+ Web Applications that perform CRUD operations, File reading, PDF generating and information dashboard using PHP, jQuery, connected with MySQL database",
                "Develop REST API for internal use and provides data to an affiliated organization using PHP, Node.js/Express.js, connected with MySQL database",
                "Develop and design a Static website that serves student's statistic information using Vue.js",
                "Develop and design Client-Side Web Application using React.js"
            ]
        }
    ]
    const work = workFromProps.reverse()
    const [WorkItem, setWorkItemState] = useState<WorkItem>(work.find(workItem => workItem.dateEnd === '') ?? work[0])
    const [workSelector, setWorkSelector] = useState<Array<WorkSelectorItem>>(work.map(item => {
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
        const WorkCard = work.find(workItem => workItem.jobNo === workSelector?.find(workSelectorItem => workSelectorItem.isSelected)?.jobNo) ?? work[0]
        setWorkItemState(WorkCard)
    }, [workSelector]);

    const IconList = {
        programming: FaCode,
        nonprogramming: FaFileAlt
    }

    return (
        <section id='work' className='flex flex-col w-full scroll-mt-6 scroll-smooth mb-12'>
            <h6 className='text-center text-3xl font-bold'>Test</h6>
            {/* <h6 className='text-center text-3xl font-bold'>Work Experience</h6> */}
            <div className='flex justify-center mt-5'>
                {
                    workSelector.map(item => {
                        const buttonClass = item.isSelected ? 'bg-blue-800' : 'bg-white'
                        const IconComponent = item.jobField === 'none' ? IconList.nonprogramming : IconList.programming
                        return (
                            <button type='button' onClick={() => { handleClickWorkIcon(item.jobNo) }} className={buttonClass + " bg-w flex mx-5 items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0"}>
                                <IconComponent />{' '}
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