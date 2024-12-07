/**
 * get GCP project id
 *
 * @returns {Promise<String>}
 */
export function getProjectId(): Promise<String>
/**
 * get GCP region
 *
 * @returns {Promise<String>}
 */
export function getRegion(): Promise<String>
/**
 * projectId and region in same call
 *
 * @returns {Promise<{projectId: string, region: string}>}
 */
export function getProjectInfo(): Promise<{
  projectId: string
  region: string
}>
