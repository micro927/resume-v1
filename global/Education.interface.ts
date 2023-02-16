export interface EducationItem {
    level: number
    levelTitle: string
    levelTitleTH: string
    majorTitle: string
    majorTitleTH: string
    institute: string
    degree: string
    yearGrad: string
    researchTitle?: string
    researchFields?: Array<any>
    researchTools?: Array<any>
    researchUrls?: string
}

export type Education = EducationItem[]