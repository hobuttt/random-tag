<template>
  <v-col>
    <v-tabs class="tabHeader" grow>
      <v-tabs-slider color="red" style="width: 100%"></v-tabs-slider>
      <v-tab :to="tab.path" v-for="(tab, index) in tabs" :key="index">
        {{ tab.title }}
      </v-tab>
    </v-tabs>
  </v-col>
</template>

<script>
export default {
  name: 'Tabs',
  props: ['tabs']
}
</script>

<style>
  .tabHeader .v-item-group {
    background-color: transparent !important;
  }
</style>
