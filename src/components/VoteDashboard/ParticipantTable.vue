<template>
    <div>
      <div v-if="participants.game[0].round_id.is_finished" style="max-width: 200px; color: red">
        <span> Данный раунд завершен. Измененить оценку более невозможно </span>
      </div>
      <ParticipantRow v-for="item in participants.game[0].table_id.participant_id"
                        :key="item.id"
                        :rowData="item"
                        :judge-i-d="participants.game[0].judge_id"
                        :roundID = "participants.game[0].round_id"
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