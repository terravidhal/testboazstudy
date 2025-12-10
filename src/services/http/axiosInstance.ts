import axios from 'axios'
import { API_BASE_URL } from '../../config/env'
import { USE_MOCKS } from '../../config/env'

export const http = axios.create({
  baseURL: API_BASE_URL,
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (USE_MOCKS) {
      return Promise.reject(error)
    }
    return Promise.reject(error)
  },
)


