import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_SERVER_URL
})

const auth = axios.create({
  baseURL: process.env.AUTH_SERVER_UR
})

export function extractToken(res) {
  return res.headers.authorization.substring(7)
}

export function setHeaders(token) {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  else {
    delete api.defaults.headers.common['Authorization']
  }
}

export default api