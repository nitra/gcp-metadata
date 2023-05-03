import gcpMetadata from 'gcp-metadata'

let projectId
export async function getProjectId() {
  try {
    // If a user is instantiating several call at the same time,
    // this may result in multiple calls to getProjectId(), to detect the
    // runtime environment. We use the same promise for each of these calls
    // to reduce the network load.
    if (projectId === undefined && (await gcpMetadata.isAvailable())) {
      projectId = gcpMetadata.project('project-id')
    }

    return projectId
  } catch (e) {
    return process.env.GCP_PROJECT
  }
}

let region
export async function getRegion() {
  try {
    // If a user is instantiating several call at the same time,
    // this may result in multiple calls to getRegion(), to detect the
    // runtime environment. We use the same promise for each of these calls
    // to reduce the network load.
    if (region === undefined && (await gcpMetadata.isAvailable())) {
      region = gcpMetadata.project('attributes/google-compute-default-region')
    }

    return region
  } catch (e) {
    return process.env.GCP_REGION
  }
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
