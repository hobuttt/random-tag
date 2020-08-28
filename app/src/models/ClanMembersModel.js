
export class ClanMembersModel {
  constructor (member) {
    this.id = member.account_id
    this.name = member.account_name
  }
}
