<template>
  <v-app class="transparent">
    <v-navigation-drawer
      clipped
      left
      app
      v-model="drawer"
    >
      <v-list dense>
        <v-list-item
          :key="link.icon"
          :to="link.url"
          active-class="secondary--text"
          v-for="link of links"
        >
          <v-list-item-icon>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
<!--      <v-list dense>-->
<!--        <v-list-item @click="logout">-->
<!--          <v-list-item-icon>-->
<!--            <v-icon>exit_to_app</v-icon>-->
<!--          </v-list-item-icon>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title class="logout-button">logout</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
      <v-list class="mt-2 version">
        <v-list-item to="/version">
          <v-list-item-content>
            <v-list-item-title>{{ 'версия' }} {{0.1}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      class="mainToolbar"
      clipped-left
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        @click.native="drawer = !drawer"/>
      <span class="title ml-3 mr-5 white--text">
        {{ $t(`routes.${this.$route.name}`) }}
      </span>
      <v-spacer/>
<!--      <v-col class="mr-3 mt-6" cols="1">-->
<!--        <v-select-->
<!--          :items="languages"-->
<!--          :label="$t('forms.language')"-->
<!--          item-text="name"-->
<!--          item-value="alias"-->
<!--          light-->
<!--          solo-->
<!--          v-model="selectedLanguage"-->
<!--          :no-data-text="$t('forms.noData')"-->
<!--        >-->
<!--          <template v-slot:item="{ item }">-->
<!--            <v-list-item-avatar-->
<!--              size="30"-->
<!--            >-->
<!--              <CountryFlag :country='item.alias' size='normal'/>-->
<!--            </v-list-item-avatar>-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title v-text="item.name"/>-->
<!--            </v-list-item-content>-->
<!--          </template>-->
<!--        </v-select>-->
<!--      </v-col>-->
    </v-app-bar>
    <v-content style="flex: initial;">
      <v-container
        class="mx-0 fill-height"
        fluid
      >
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Layout',
  data: () => ({
    drawer: null,
    dialog: false,
    menu: false,
    defaultTitle: '4221',
    // version: localStorage.version,
    selectedLanguage: localStorage.locale,
    languages: [{ alias: 'ru', name: 'RU' }, { alias: 'us', name: 'ENG' }]
  }),
  computed: {
    links () {
      return [
        { title: this.$t('routes.Home'), icon: 'contact_phone', url: '/' },
        { title: this.$t('routes.Clans'), icon: 'person', url: '/clans' }
      ]
    }
  },
  created () {

  },
  methods: {
    ...mapActions(['logout']),
    logout () {
      this.$store.commit('logout')
    }
  }
}
</script>

<style scoped>

</style>
