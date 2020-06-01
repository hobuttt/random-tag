import axios from 'axios'

export default {
  fetchPosts () {
    return axios.get('/posts')
  },
  getPost (tag) {
    return axios.get('/clans/list/', { params: { search: tag } })
  },
  addPost (post) {
    return axios.post('/posts', post)
  },
  editPost (post) {
    return axios.put(`/posts/${post.id}`, post)
  },
  deletePost (postId) {
    return axios.delete(`/posts/${postId}`)
  }
}
