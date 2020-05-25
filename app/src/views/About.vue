<template>
  <v-row class="about">
    <v-col>
      <h1>This is an about page</h1>
    </v-col>
    <v-col cols="12" class="text-center">
      <router-link to="/"> Home</router-link>
    </v-col>
    <v-col cols="12" class="text-center">
      <v-text-field
        label="Post text"
        :rules="[v => !!v || 'Required.']"
        hide-details="auto"
        style="width: 300px; margin: 20px auto"
        v-model="model.text"
      />
      <v-btn
        class="mt-6" @click="addPost"
        :disabled="model.text === '' || model.title === ''"
        color="success"
      > Get clans</v-btn>
    </v-col>
  </v-row>
</template>
<script>
import PostService from '@/services/PostService'

export default {
  name: 'About',
  data () {
    return {
      model: {},
      data: null
    }
  },
  methods: {
    async getPosts () {
      const response = await PostService.fetchPosts()
      this.posts = response.data
    },
    async getPost (postId) {
      const response = await PostService.getPost(postId)
      this.selectedPost = response.data
    },
    async addPost () {
      await PostService.addPost(this.model)
      this.model = {}
    },
    openEditForm (postId) {
      this.isEdit = !this.isEdit
      this.selectedPostId = postId
      this.model = {}
    },
    async editPost () {
      this.model.id = this.selectedPostId
      await PostService.editPost(this.model)
      console.log('Edited...')
    },
    async deletePost (postId) {
      await PostService.deletePost(postId)
      console.log('Deleted')
    }
  }
}
</script>
