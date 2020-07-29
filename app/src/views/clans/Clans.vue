<template>
  <v-row dense>
    <v-col lg="4" md="5" sm="8" xl="6">
      <Tabs :tabs="tabs" />
    </v-col>
    <v-col sm="12">
      <router-view></router-view>
    </v-col>
  </v-row>
</template>

<script>
import Tabs from '../../components/Tabs'

export default {
  name: 'Clans',
  components: { Tabs },
  data () {
    return {
      tab: null,
      tabs: [
        {
          path: 'info',
          title: 'Информация'
        },
        {
          path: 'create-tag',
          title: 'Активности'
        }
      ]
    }
  }
}
</script>
