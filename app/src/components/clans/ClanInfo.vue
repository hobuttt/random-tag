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
          <td class="col-width">{{ $t('reusable.description') }}</td>
          <td class="col-width" >
            <v-autocomplete :items="members"/>
          </td>
        </tr>

      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_MEMBERS } from '../../store/actions-types'

export default {
  name: 'ClanInfo',
  props: ['id'],
  computed: {
    ...mapGetters({
      clan: 'getClan',
      members: 'getClanMembers'
    })
  },
  watch: {
    clan () {
      this.$store.dispatch(GET_MEMBERS, this.clan.membersIds.join())
    }
  }
}
</script>
<style>
  .col-width {
    width: 50%;
  }
</style>
