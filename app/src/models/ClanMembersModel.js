
export class ClanModel {
  constructor (member) {
    this.id = member.account_id
    this.name = member.account_name
  }
}
