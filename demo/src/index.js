import { getProjectId, getRegion, getProjectInfo } from '@nitra/gcp-metadata'

console.log(await getProjectId())

console.log(await getRegion())

console.log(await getProjectInfo())
