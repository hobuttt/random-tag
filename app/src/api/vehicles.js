import axios from 'axios'

export default {
  getVehiclesInfo (ids) {
    return axios.get('/vehicles/info', { params: { ids } })
  }
}
