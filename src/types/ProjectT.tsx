
interface ProjectImageT {
    desc?: string
    link: string
}
export interface ProjectT {
    name: string
    desc?: string
    github?: string
    link?: string
    images: Array<ProjectImageT>
}