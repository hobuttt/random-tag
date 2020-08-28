<template>
  <v-expansion-panels inset multiple hover>
    <v-expansion-panel
      v-for="item in memberInfo"
      :key="item.tankId"
    >
      <template v-if="vehiclesInfo[item.tankId]">
        <v-expansion-panel-header>
          <span >
            {{vehiclesInfo[item.tankId].name}}
          </span>
          <!--          {{vehiclesInfo ? vehiclesInfo[item.tankId].name : 's'}}-->
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Боёв: {{item.battleLifeTime}} <br>
          Последний бой: {{item.lastBattleTime}}
        </v-expansion-panel-content>
      </template>


    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MemberInfo',
  computed: {
    ...mapGetters({
      memberInfo: 'getMemberInfo',
      vehiclesInfo: 'getVehiclesInfo'
    })
  }
}
</script>
