import { getTimeFromTimestamp } from '@/utils/dateTimeHelper.js'

export class MemberTanksInfoModel {
  constructor (memberInfo, allTankInfo) {
    // this.memberId = memberInfo.account_id
    this.tankId = memberInfo.tank_id
    this.battleLifeTime = memberInfo.battle_life_time
    this.lastBattleTime = getTimeFromTimestamp(memberInfo.last_battle_time)
  }
}
// const j = {
//   all: {
//     'spotted': 4, 'hits': 78, 'frags': 13, 'max_xp': 945, 'wins': 9, 'losses': 5, 'capture_points': 131, 'battles': 14, 'damage_dealt': 7891, 'damage_received': 3153, 'max_frags': 5, 'shots': 93, 'frags8p': 0, 'xp': 6350, 'win_and_survived': 8, 'survived_battles': 8, 'dropped_capture_points': 0
//   },
//   'last_battle_time': 1560546518,
//   'account_id': 28933,
//   'max_xp': 0,
//   'in_garage_updated': 0,
//   'max_frags': 0,
//   'frags': null,
//   'mark_of_mastery': 3,
//   'battle_life_time': 2381,
//   'in_garage': null,
//   'tank_id': 52065 }
// }
