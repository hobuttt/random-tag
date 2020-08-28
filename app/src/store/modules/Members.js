import { GET_MEMBER_INFO } from '@/store/actions-types'
import { SET_MEMBER_INFO } from '@/store/mutations-types'
import api from '@/api/members'
import { MemberTanksInfoModel } from '@/models/MemberTanksInfoModel'

const state = {
  memberInfo: []
}
const mutations = {
  [SET_MEMBER_INFO] (state, memberInfo) {
    state.memberInfo = memberInfo
  }
}
const actions = {
  async [GET_MEMBER_INFO] ({ commit }, memberId) {
    const result = []
    try {
      const { data } = await api.getMemberInfo(memberId)
      data[memberId].forEach(memberInfo =>
        result.push(new MemberTanksInfoModel(memberInfo, memberInfo.all))
      )
      commit(SET_MEMBER_INFO, result)
      return result
    } catch (error) {
      console.log(error)
    }
  }
}

const getters = {
  getMemberInfo: state => state.memberInfo

}

export default {
  state,
  mutations,
  actions,
  getters
}
