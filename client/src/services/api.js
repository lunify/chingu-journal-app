import axios from 'axios'

var api

function init({ baseURL = '/api', token } = {}) {
  api = axios.create({
    baseURL,
    headers: { authorization: token && `Bearer ${token}` }
  })
}

export { init }
