import { getProjectId, getRegion } from '@nitra/gcp-metadata'

console.log(await getProjectId())

console.log(await getRegion())
