import gcpMetadata from 'gcp-metadata'

let projectId
export async function getProjectId() {
  if (!projectId && (await gcpMetadata.isAvailable())) {
    projectId = await gcpMetadata.project('project-id')
  }

  return projectId
}

let region
export async function getRegion() {
  if (!region && (await gcpMetadata.isAvailable())) {
    region = await gcpMetadata.project('attributes/google-compute-default-region')
  }

  return region
}
