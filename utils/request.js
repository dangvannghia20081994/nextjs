import axios from 'axios'

import { getToken, setToken } from 'common/hook/useToken'
// Create axios instance
const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  timeout: 10000 // Request timeout
})

// Request intercepter
service.interceptors.request.use(
  (config) => {
    config.headers['Cache-Control'] = 'no-store'
    const token = getToken()
    if (token) {
      config.headers.Authorization = 'Bearer ' + token // Set JWT token
    }
    return config
  },
  (error) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(error)
    }
    // Do something with request error
    Promise.reject(error)
  }
)

// response pre-processing
service.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      setToken(response.headers.authorization)
    }
    return response.data
  },
  (error) => {
    if (process.env.NODE_ENV !== 'production') {
      if (error.response) {
        const { url, method, params, headers } = error.response.config
        console.log({ url, method, params, headers })
      } else {
        console.error(error.response)
      }
    }
    return Promise.reject(error)
  }
)
// Req profile/user
const getHeaders = (headers = null, token = null) => {
  if (!headers) {
    headers = {
      'Content-Type': 'application/json',
    }
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return headers
}
const getData = (uri = '', params = {}, token = null, headers = null) => {
  headers = getHeaders(headers, token)
  return new Promise(function (resolve, reject) {
    service.get(uri, {
      headers,
      params
    })
    .then(res => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
  })
}
const postData = (uri = '', data = {}, token = null, headers = null) => {
  headers = getHeaders(headers, token)
  return Promise((resolve, reject) => {
    service.post(uri, {
      headers,
      data
    })
    .then(res => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
  })
}
const customMethod = (method = 'GET', params = {}, data = {}, token = null, headers = null) => {
  headers = getHeaders(headers, token)
  return Promise((resolve, reject) => {
    service({
      url: uri,
      method,
      headers,
      params,
      data
    })
    .then(res => {
      resolve(res)
    })
    .catch((err) => {
      reject(err)
    })
  })
}
export { getData, postData, customMethod }
export default service