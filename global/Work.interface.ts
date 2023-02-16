export interface WorkItem {
    jobNo: number
    jobTitle: string
    jobField: string
    organization: string
    dateStart: string
    dateEnd: string
    descriptionList: string[]
    tagList: string[]
}

export type Work = WorkItem[]

export interface WorkSelectorItem {
    jobNo: number
    jobField: string
    dateStart: string
    dateEnd: string
    isSelected: boolean
}

export type WorkSelector = WorkSelectorItem[]
