import axios from 'axios'

export default {
  getMemberInfo (id) {
    return axios.get('/member/info', { params: { id } })
  }
}
