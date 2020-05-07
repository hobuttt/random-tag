<template>
    <v-row class="text-center">
      <v-col cols="6" offset="3" class="text-center">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4" cols="6" offset="3">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Random Tags
        </h1>

        <p class="subheading font-weight-regular">
          Прривет переходи на страницу <a href="/create-tag">создать тег</a>
        </p>
      </v-col>

    </v-row>
</template>

<script>
export default {
  name: 'HelloWorld',

  data: () => ({
  })
}
</script>
