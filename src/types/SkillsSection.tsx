export interface SocialLinksT {
    [key: string]: string
}

export interface SoftwareSkillsT {
    skillName: string,
    fontAwesomeClassname: string
}
export interface SkillsItemT {
    title: string
    lottieAnimationFile: string
    skills: Array<string>
    softwareSkills: Array<SoftwareSkillsT>

}
export interface SkillsSectionT {
    title?: string
    subTitle?: string
    data: Array<SkillsItemT>
}