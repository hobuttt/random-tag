import { GET_CLAN_BY_TAG } from '@/store/actions-types'
import { SET_CLAN_BY_TAG, CLEAN_CLANS_BY_TAG } from '@/store/mutations-types'
import api from '@/services/PostService'
import { ClanModel } from '@/models/ClanModel'

const state = {
  clansByTag: []
}
const mutations = {
  [SET_CLAN_BY_TAG] (state, clan) {
    state.clansByTag.push(clan)
  },
  [CLEAN_CLANS_BY_TAG] (state) {
    state.clansByTag = []
  }
}
const actions = {
  async [GET_CLAN_BY_TAG] ({ commit }, payload) {
    try {
      const { data } = await api.getPost(payload)
      console.log(data)
      commit(SET_CLAN_BY_TAG, new ClanModel(data.data[0]))
      console.log('Clan is get')
    } catch (error) {
      console.log(error)
    }
  }
}
const getters = {
  getClansByTag: state => state.clansByTag
}

export default {
  state,
  mutations,
  actions,
  getters
}
