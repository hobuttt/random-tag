<template>
  <v-app>
    <transition mode="out-in" name="fade">
      <router-view/>
    </transition>

    <v-content>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
