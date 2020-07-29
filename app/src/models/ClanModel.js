import i18n from '../plugins/i18n'
import { getTimeFromTimestamp } from '../utils/dateTimeHelper.js'

export class ClanModel {
  constructor (clan) {
    this.id = clan.clan_id
    this.name = clan.name
    this.tag = clan.tag
    this.members = clan.members_count
    this.createdAt = getTimeFromTimestamp(clan.created_at)
  }

  static getFiltersList () {
    return {
      language: {
        value: 'ru',
        type: String,
        label: i18n.t('search.changeLanguage'),
        name: 'language'
      },
      page_no: {
        value: 1,
        type: Number,
        name: 'page_no'
      },
      limit: {
        value: 10,
        type: Number,
        name: 'limit'
      },
      search: {
        value: '',
        type: String,
        label: i18n.t('search.clanName'),
        name: 'search'
      }
    }
  }
}
