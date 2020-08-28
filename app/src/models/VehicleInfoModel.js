// import { getTimeFromTimestamp } from '@/utils/dateTimeHelper'

export class VehicleInfoModel {
  constructor (vehicleInfo) {
    this.tankId = vehicleInfo.tank_id
    this.name = vehicleInfo.name
    this.isPremium = vehicleInfo.is_premium
    this.tier = vehicleInfo.tier
    this.nation = vehicleInfo.nation
    this.images = vehicleInfo.images || []
    this.type = vehicleInfo.type
  }
}
