import axios from 'axios'

export default {
  fetchPosts () {
    return axios.get('/posts')
  },
  getClans (search) {
    return axios.get('/clan/list', { params: search })
  },
  getClanInfo (id) {
    return axios.get('/clan/info', { params: { id } })
  },
  getClanMembers (accountIds) {
    return axios.get('/clan/members', { params: { account_id: accountIds } })
  }
  // addPost (post) {
  //   return axios.post('/posts', post)
  // },
  // editPost (post) {
  //   return axios.put(`/posts/${post.id}`, post)
  // },
  // deletePost (postId) {
  //   return axios.delete(`/posts/${postId}`)
  // }
}
