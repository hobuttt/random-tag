import {
  GET_CLAN_BY_TAG,
  GET_CLANS,
  GET_CLAN_INFO,
  GET_MEMBERS
} from '../actions-types'
import {
  SET_CLAN_BY_TAG,
  SET_CLAN_INFO,
  CLEAN_CLANS_BY_TAG,
  SET_CLANS,
  SET_CLANS_TOTAL,
  SET_MEMBERS
} from '../mutations-types'
import api from '../../api/clans'
import { ClanModel } from '@/models/ClanModel'
import { ClanInfoModel } from '@/models/ClanInfoModel'
import { ClanMembersModel } from '@/models/ClanMembersModel'

const state = {
  clansByTag: [],
  clanById: {},
  clans: [],
  clansTotal: 0,
  members: []
}
const mutations = {
  [SET_CLANS] (state, clans) {
    state.clans = clans
  },
  [SET_CLANS_TOTAL] (state, total) {
    state.clansTotal = total
  },
  [SET_CLAN_INFO] (state, clan) {
    state.clanById = clan
  },
  [SET_CLAN_BY_TAG] (state, clan) {
    state.clansByTag.push(clan)
  },
  [CLEAN_CLANS_BY_TAG] (state) {
    state.clansByTag = []
  },
  [SET_MEMBERS] (state, members) {
    state.members = members
  }
}
const actions = {
  async [GET_CLANS] ({ commit }, payload) {
    try {
      const result = []
      const { data, meta } = await api.getClans(payload)
      data.forEach(clan =>
        result.push(new ClanModel(clan))
      )
      commit(SET_CLANS, result)
      commit(SET_CLANS_TOTAL, meta.total)
    } catch (error) {
      console.log(error)
    }
  },
  async [GET_CLAN_INFO] ({ commit }, id) {
    try {
      const { data } = await api.getClanInfo(id)
      commit(SET_CLAN_INFO, new ClanInfoModel(data[id]))
    } catch (error) {
      console.log(error)
    }
  },
  async [GET_CLAN_BY_TAG] ({ commit }, payload) {
    try {
      const { data } = await api.getPost(payload)
      commit(SET_CLAN_INFO, new ClanModel(data[0]))
    } catch (error) {
      console.log(error)
    }
  },
  async [GET_MEMBERS] ({ commit }, accountIds) {
    const result = []
    try {
      const { data } = await api.getClanMembers(accountIds)
      const members = Object.values(data)
      members.forEach(member =>
        result.push(new ClanMembersModel(member))
      )
      commit(SET_MEMBERS, result)
    } catch (error) {
      console.log(error)
    }
  }
}
const getters = {
  getClans: state => state.clans,
  getClan: state => state.clanById,
  getClansTotal: state => state.clansTotal,
  getClansByTag: state => state.clansByTag,
  getClanMembers: state => state.members
}

export default {
  state,
  mutations,
  actions,
  getters
}
