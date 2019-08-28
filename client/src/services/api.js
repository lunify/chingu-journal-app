import axios from 'axios'

var api

function init({ baseURL = '/api', token } = {}) {
  api = axios.create({
    baseURL,
    headers: { authorization: token && `Bearer ${token}` }
  })
}

const auth = {
  async register({ username, password }) {
    const { data } = await api.post('/auth/register', { username, password })

    if (!data.errors) {
      init({ token: data.user.token })
    }

    return data
  },
  async login({ username, password }) {
    const { data } = await api.post('/auth/login', { username, password })

    if (!data.errors) {
      init({ token: data.user.token })
    }

    return data
  }
}

const notesAPI = {
  async createNote({ title, body, userId }) {
    const { data } = await api.post(`/notes/?userId=${userId}`, { title, body })
    return data
  },
  async deleteNote({ id, userId }) {
    const { data } = await api.delete(`/notes/${id}/?userId=${userId}`)
    return data
  }
}

export { init, auth, notesAPI }
