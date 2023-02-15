export interface WorkItem {
    jobNo: number
    jobTitle: string
    jobField: string
    organization: string
    dateStart: string
    dateEnd: string
    descriptionList: Array<any>
}

export interface WorkSelectorItem {
    jobNo: number
    jobField: string
    dateStart: string
    dateEnd: string
    isSelected: boolean
}