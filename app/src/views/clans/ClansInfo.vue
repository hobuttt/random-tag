<template>
  <v-row>
    <v-col cols="12" >
      <v-card elevation="2">
        <v-card-title>
          <v-container>
            <v-row >
              <v-col cols="12">
                <h5>Кланы</h5>
              </v-col>
            </v-row>
            <v-row class="justify-space-around">
              <v-col sm="6" md="3">
                <v-text-field
                  v-model="filters.search.value"
                  append-icon="mdi-magnify"
                  :label="filters.search.label"
                  @change="searchByFilters"
                  single-line
                  clearable
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col sm="6" md="3">
                <v-select
                  :items="languages"
                  :label="filters.language.label"
                  :no-data-text="$t('reusable.noData')"
                  @change="searchByFilters"
                  item-text="title"
                  item-value="alias"
                  v-model="filters.language.value"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="clans"
          :search="searchModel"
          :footer-props="{
            itemsPerPageOptions: [10, 20, 50, 100],
            itemsPerPageText: 'Номер страницы'
          }"
          :page.sync="page"
          :items-per-page.sync="perPage"
          :options.sync="pagination"
          :disable-sort="true"
          :server-items-length="clansTotal"
        >
<!--          :server-items-length="clansTotal"-->

          <v-data-table
            item-key="name"
            class="elevation-1"
            loading
            loading-text="Loading... Please wait"
          >
          </v-data-table>
          <template v-slot:item.actions="{ item }">
            <v-btn
              :to="'/clans/info/' + item.id"
              icon
              small
              fab
            >
              <div>
                <v-icon>remove_red_eye</v-icon>
              </div>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>

</template>
<script>
import { ClanModel } from '../../models/ClanModel'
import { Pagination } from '../../mixins/Pagination'
import { formatToSend } from '../../utils/formatToSend'
import { GET_CLANS } from '../../store/actions-types'
import { mapGetters } from 'vuex'

export default {
  name: 'ClansInfo',
  mixins: [Pagination],
  data () {
    return {
      searchModel: '',
      headers: [
        {
          text: this.$t('reusable.title'),
          value: 'name'
        },
        { text: this.$t('reusable.tag'), value: 'tag' },
        { text: this.$t('reusable.members'), value: 'members' },
        { text: this.$t('reusable.createdAt'), value: 'createdAt' },
        { text: this.$t('reusable.id'), value: 'id' },
        { text: this.$t('reusable.more'), value: 'actions' }
      ],
      pagination: {},
      filters: ClanModel.getFiltersList(),
      languages: [
        { title: this.$t('languages.ru'), alias: 'ru' },
        { title: this.$t('languages.eng'), alias: 'en' }
      ]
    }
  },
  mounted () {
    this.getClans()
    this.$on('paginationChange', this.searchByFilters)
  },
  computed: {
    ...mapGetters({
      clans: 'getClans',
      clansTotal: 'getClansTotal'
    })
  },
  methods: {
    getClans () {
      this.$store.dispatch(GET_CLANS, formatToSend(this.filters))
    },
    searchByFilters () {
      this.filters.page_no.value = this.page
      this.filters.limit.value = this.perPage
      this.getClans()
    }
  }
}
</script>
