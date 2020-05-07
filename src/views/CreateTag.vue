<template>
  <v-row>
    <v-col cols="12" class="text-center">
      <h2>Создать тег</h2>
    </v-col>
    <v-row>
      <v-col cols="12">
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
                offset-md="4"
              >
                <v-text-field
                  v-model="clanname"
                  :rules="nameRules"
                  :counter="10"
                  label="Clan name"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
                offset-md="4"
                class="text-right"
              >
                <v-btn @click="getTags" :disabled="!valid">Push</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-row>
</template>
<script>
export default {
  name: 'CreateTag',
  data: () => ({
    valid: false,
    clanname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ]
  }),
  methods: {
    getTags () {
      console.log(2222)
    }
  }
}
</script>
