export { FiveFiveFiveStudio } from "./fivefivefive-studio"
export { TrailsLegal } from "./trails-legal"
export { ButterflyProject } from "./butterfly-project"

export const projectIds = ["fivefivefive-studio", "trails-legal", "butterfly-project"] as const
export type ProjectId = typeof projectIds[number]

