<template>
  <v-row>
    <v-col class="pb-0">
      <v-simple-table class="px-4 py-4" >
        <tr>
          <td class="col-width">
            {{ $t('reusable.title') }}
          </td>
          <td class="col-width">{{ clan.name }}</td>
        </tr>
        <tr>
          <td class="col-width">{{ $t('reusable.id') }}</td>
          <td class="col-width">
            {{ clan.id }}
          </td>
        </tr>
        <tr>
          <td class="col-width">
            {{ $t('reusable.tag') }}
          </td>
          <td class="col-width">{{ `[ ${clan.tag} ]` }}</td>
        </tr>
        <tr>
          <td class="col-width">{{ $t('reusable.createdAt') }}</td>
          <td class="col-width">{{ clan.createdAt }}</td>
        </tr>
        <tr>
          <td class="col-width">{{ $t('clans.creatorName') }}</td>
          <td class="col-width">{{ clan.creatorName }}</td>
        </tr>
        <tr>
          <td class="col-width">{{ $t('clans.leaderName') }}</td>
          <td class="col-width">{{ clan.leaderName }}</td>
        </tr>
        <tr >
          <td class="col-width pt-2">{{ $t('clans.motto') }}</td>
          <td class="col-width pt-2">{{ clan.motto }}</td>
        </tr>
        <tr >
          <td class="col-width pt-2">{{ $t('reusable.description') }}</td>
          <td class="col-width pt-2" >{{ clan.description }}</td>
        </tr>
        <tr >
          <td class="col-width pt-4">{{ $t('clans.clanMembers') }}</td>
          <td class="col-width pt-4" >
            <v-autocomplete
              :items="members"
              :label="$t('clans.clanMember')"
              @change="getMemberInfo"
              :no-data-text="$t('reusable.noData')"
              v-model="selectedMemberId"
              item-text="name"
              item-value="id"
            />
          </td>
        </tr>

      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  GET_MEMBER_INFO,
  GET_MEMBERS,
  GET_VEHICLES_INFO
} from '@/store/actions-types'

export default {
  name: 'ClanInfo',
  props: ['id'],
  data: () => ({
    selectedMemberId: ''
  }),
  computed: {
    ...mapGetters({
      clan: 'getClan',
      members: 'getClanMembers'
    })
  },
  methods: {
    getMemberInfo () {
      this.$store.dispatch(GET_MEMBER_INFO, this.selectedMemberId).then(tanks => {
        const tanksIds = tanks.map(tank => tank.tankId).join()
        this.$store.dispatch(GET_VEHICLES_INFO, tanksIds)
      })
    }
  },
  watch: {
    clan () {
      this.$store.dispatch(GET_MEMBERS, this.clan.membersIds.join())
    },
    members () {
      if (this.members.length) {
        this.selectedMemberId = this.members[0].id
        this.getMemberInfo()
      }
    }
  }
}
</script>
<style>
  .col-width {
    width: 50%;
  }
</style>
