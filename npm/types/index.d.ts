/**
 * get GCP project id
 *
 * @returns {Promise<string>}
 */
export function getProjectId(): Promise<string>
/**
 * get GCP region
 *
 * @returns {Promise<string>}
 */
export function getRegion(): Promise<string>
/**
 * projectId and region in same call
 *
 * @returns {Promise<{projectId: string, region: string}>}
 */
export function getProjectInfo(): Promise<{
  projectId: string
  region: string
}>
