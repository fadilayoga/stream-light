import CONFIG from './config'

const API_ENDPOINT = {
  REGISTRATION_TOKEN: `${CONFIG.BASE_URL}registration-token`,
  LIGHTING_ALL: `${CONFIG.BASE_URL}lighting-all`,
  PROBLEM_LOGS: `${CONFIG.BASE_URL}problem-logs`,
  LOGIN: `${CONFIG.BASE_URL}auth/login`,
  AUTH: `${CONFIG.BASE_URL}auth/authenticate`,
  LOGOUT: `${CONFIG.BASE_URL}auth/logout`,
  LOCATION: `${CONFIG.BASE_URL}location`,
  USERS: `${CONFIG.BASE_URL}users`,
  STATIC: `${CONFIG.BASE_URL}static`,
  PICTURE: `${CONFIG.BASE_URL}users/picture`,
  EXPORT_FILE: `${CONFIG.BASE_URL}export-problem-logs`,
}

export default API_ENDPOINT
