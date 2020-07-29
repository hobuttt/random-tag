import { GET_MEMBERS } from '../actions-types'
import { SET_MEMBERS } from '../mutations-types'
import api from '../../api/clans'
import { ClanModel } from '../../models/ClanModel'

const state = {
  members: []
}
const mutations = {
  [SET_MEMBERS] (state, members) {
    state.members = members
  }
}
const actions = {
  async [GET_MEMBERS] ({ commit }, payload) {
    try {
      const result = []
      const { data, } = await api.getMembers(payload)
      data.forEach(clan =>
        result.push(new ClanModel(clan))
      )
      commit(SET_MEMBERS, result)
    } catch (error) {
      console.log(error)
    }
  }
}
const getters = {
  getClans: state => state.clans,

}

export default {
  state,
  mutations,
  actions,
  getters
}
