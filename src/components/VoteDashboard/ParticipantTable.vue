<template>
    <div>
      <ParticipantRow v-for="item in participants.game[0].table_id.participant_id"
                        :key="item.id"
                        :rowData="item"
      />
    </div>
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow'
export default {

  name: "ParticipantTable.vue",
  props:['participants'],
  components: {
      ParticipantRow
  }

}
</script>

<style scoped>

</style>