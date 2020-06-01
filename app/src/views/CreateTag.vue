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
        label="Название клана"
        :rules="clanNameRules"
        hide-details="auto"
        :counter="25"
        style="width: 300px; margin: 20px auto"
        v-model="clanName"
      />
      <v-btn
        class="mt-6" @click="getClan"
        :disabled="clanName === '' || clanName.length > 25 || clanName.length < 2"
        color="success"
      > Get clans</v-btn>
    </v-col>
    <v-col cols="12" class="text-center">
      {{clansByTag}}
    </v-col>
    <v-col cols="12" class="text-center">
      <v-text-field
        label="Клан тег"
        :rules="tagRules"
        hide-details="auto"
        :counter="5"
        style="width: 300px; margin: 20px auto"
        v-model="selectedTag"
      />
      <v-btn
        class="mt-6" @click="getClan"
        :disabled="selectedTag === '' || selectedTag.length !== 5"
        color="success"
      > Get clans</v-btn>
    </v-col>
    <v-col cols="12" class="text-center">
      {{clansByTag}}
    </v-col>
  </v-row>
</template>
<script>
import PostService from '@/services/PostService'
import { mapGetters } from 'vuex'
import { GET_CLAN_BY_TAG } from '@/store/actions-types'
import { CLEAN_CLANS_BY_TAG } from '@/store/mutations-types'

export default {
  name: 'CreateTag',
  data () {
    return {
      selectedTag: '',
      clanName: '',
      data: null,
      selectedPost: {},
      regex: /^[a-zа-я0-9_(\s)]$/,
      tagRules: [
        v => !!v || 'Required.',
        v => v.length < 6 || 'Тег должен сосотять из 5 символов.',
        v => v.length > 4 || 'Тег должен сосотять из 5 символов.'
      ],
      clanNameRules: [
        v => !!v || 'Required.',
        v => v.length < 26 || 'Название должно не длиннее 25 символов.',
        v => v.length > 1 || 'Название должно быть не короче 2 символов.',
        v => this.regex.test(v) || 'Используйте строчные и заглавные буквы латинского и кириллического алфавита, пробелы, цифры, дефис и символ подчеркивания.'
        // Запретим пользователю использовать в своем имени любые символы, кроме букв русского и латинского алфавита, знака "_" (подчерк), пробела и цифр:
        // /[^(\w)|(\x7F-\xFF)|(\s)]/
        // Состоит ли строка только из букв, цифр и "_", длиной от 8 до 20 символов:
        // /^[a-zа-я0-9_\s]{2,25}$/
        //
      ]
    }
  },
  computed: {
    ...mapGetters({
      clansByTag: 'getClansByTag'
    })
  },
  /* В полном названии можно использовать строчные и заглавные буквы латинского, кириллического и других алфавитов, пробелы, цифры, дефис и символ подчеркивания.

Полное название клана может содержать от 2 до 25 символов.

В сокращенном названии (теге) допускаются только заглавные буквы латинского алфавита, дефис, знак нижнего подчеркивания и цифры.

Сокращённое название (тег) может содержать от 2 до 5 символов.

Полные и сокращенные названия (теги) кланов уникальны, без учета регистра. */

  methods: {
    async getPosts () {
      const response = await PostService.fetchPosts()
      this.posts = response.data
    },
    async getClan () {
      // const response = await PostService.getPost(this.selectedTag)
      this.$store.dispatch(GET_CLAN_BY_TAG, this.selectedTag)
      // this.selectedPost = response.data
    },
    async addPost () {
      await PostService.addPost(this.selectedTag)
      this.selectedTag = ''
    },
    openEditForm (postId) {
      this.isEdit = !this.isEdit
      this.selectedPostId = postId
      this.selectedTag = {}
    },
    async editPost () {
      this.model.id = this.selectedPostId
      await PostService.editPost(this.selectedTag)
      console.log('Edited...')
    },
    async deletePost (postId) {
      await PostService.deletePost(postId)
      console.log('Deleted')
    }
  }
}
</script>
