<template>
  <v-container>
    <v-row>
      <v-btn
        @click="$router.back()"
        class="mb-4 px-5 lead-detail-back-btn"
        color="accent"
      >
        <v-icon>keyboard_arrow_left</v-icon>
        {{ $t('reusable.back') }}
      </v-btn>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title
            class="headline font-weight-regular secondary white--text"
          >
            {{ $t('clans.clanInfo') }}

          </v-card-title>
          <ClanInfo :id="id" />
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title
            class="headline font-weight-regular secondary white--text"
          >
            {{ $t('clans.clanMembers') }}
          </v-card-title>
          <MemberInfo />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GET_CLAN_INFO } from '../../store/actions-types'
import ClanInfo from '../../components/clans/ClanInfo'
import MemberInfo from '../../components/clans/MemberInfo'

export default {
  name: 'ClanDetail',
  props: ['id'],
  components: { ClanInfo, MemberInfo },
  created () {
    this.$store.dispatch(GET_CLAN_INFO, this.id)
  }
}
</script>
