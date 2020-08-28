import { GET_VEHICLES_INFO } from '@/store/actions-types'
import { SET_VEHICLES_INFO } from '@/store/mutations-types'
import api from '@/api/vehicles'
import { VehicleInfoModel } from '@/models/VehicleInfoModel'

const state = {
  vehiclesInfo: []
}
const mutations = {
  [SET_VEHICLES_INFO] (state, vehiclesInfo) {
    state.vehiclesInfo = vehiclesInfo
  }
}
const actions = {
  async [GET_VEHICLES_INFO] ({ commit }, tanksIds) {
    try {
      const { data } = await api.getVehiclesInfo(tanksIds)
      commit(SET_VEHICLES_INFO, data)
      // return data
    } catch (error) {
      console.log(error)
    }
  }
}

const getters = {
  getVehiclesInfo: state => state.vehiclesInfo

}

export default {
  state,
  mutations,
  actions,
  getters
}
