<template>
  <v-container class="home">
    <HelloUser/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import HelloUser from '@/components/HelloUser.vue'

export default {
  name: 'Home',
  components: {
    HelloUser
  }
}
</script>
