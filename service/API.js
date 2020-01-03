import Axios from 'axios'

const isServer = !process.browser
const api = isServer
  ? Axios.create({
    baseURL: 'http://localhost:3000',
  })
  : Axios.create({
    baseURL: '/'
  })
const API = {
  getGold: (params) => api.post('/resources/gold', params),
  getGithub: (params) => api.post('/resources/github', params),
}

export default API