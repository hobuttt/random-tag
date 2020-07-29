import axios from 'axios'

export default {
  getMembers (search) {
    return axios.get('/clan/list', { params: search })
  }
}
