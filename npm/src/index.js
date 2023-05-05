import gcpMetadata from 'gcp-metadata'

let projectId
export async function getProjectId() {
  if (process.env.GCP_PROJECT) {
    return process.env.GCP_PROJECT
  }
  // If a user is instantiating several call at the same time,
  // this may result in multiple calls to getProjectId(), to detect the
  // runtime environment. We use the same promise for each of these calls
  // to reduce the network load.
  if (projectId === undefined && (await gcpMetadata.isAvailable())) {
    projectId = gcpMetadata.project('project-id')
  }

  return projectId
}

let region
export async function getRegion() {
  if (process.env.GCP_REGION) {
    return process.env.GCP_REGION
  }

  // If a user is instantiating several call at the same time,
  // this may result in multiple calls to getRegion(), to detect the
  // runtime environment. We use the same promise for each of these calls
  // to reduce the network load.
  if (region === undefined && (await gcpMetadata.isAvailable())) {
    region = gcpMetadata.project('attributes/google-compute-default-region')
  }

  return region
}

/**
 * projectId and region in same call
 *
 * @returns {Promise<{projectId: string, region: string}>}
 */
export async function getProjectInfo() {
  const [projectId, region] = await await Promise.all([getProjectId(), getRegion()])
  return { projectId, region }
}
