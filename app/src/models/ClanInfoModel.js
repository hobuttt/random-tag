// import i18n from '../plugins/i18n'
import { ClanModel } from './ClanModel'

export class ClanInfoModel extends ClanModel {
  constructor (clanInfo) {
    super(clanInfo)
    this.creatorName = clanInfo.creator_name
    this.description = clanInfo.description
    this.leaderName = clanInfo.leader_name
    this.motto = clanInfo.motto
    this.membersIds = clanInfo.members_ids
  }
}
