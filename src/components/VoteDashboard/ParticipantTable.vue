<template>
    <div>
      <div v-if="participants.game[0].round_id.is_finished" style="max-width: 200px; color: red">
        <span> Данный раунд завершен. Измененить оценку более невозможно </span>
      </div>
      <div v-if="getFinishedScore(participants.game[0].judge_id)">
            <div class="voting__score">
                <p>Имя участника</p>
                <p class="voting__score--short">Баллы</p>
                <p class="voting__score--short">Ранг</p>
            </div>
            <participant-score v-for="item in scoreData"
                               :key="item.rating"
                               :score="item"
            >

            </participant-score>

      </div>
      <div v-else>
           <ParticipantRow v-for="item in participants.game[0].table_id.participant_id"
                          :key="item.id"
                          :rowData="item"
                          :judge-i-d="participants.game[0].judge_id"
                          :roundID = "participants.game[0].round_id"
                          ref="row"
           />

          <div style="text-align: center" class="voting__finish">
            <!-- {{participants.game[0].round_id}} -->
            <!-- @click="finishRound(round)" -->
            <button class="round-select__button"
                    v-if="!participants.game[0].round_id.is_finished"
                    @click="updateSummaryScore()">
                    Завершить голосование
            </button>
          </div>

      </div>
    </div>
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow';
import {mapState} from "vuex";
import JudgeSerivce from "@/service/judge.service";
import ParticipantScore from "./ParticipantScore";

export default {
  name: "ParticipantTable",
  props:['participants', 'round'],
  components: {
      ParticipantRow,
      ParticipantScore
  },
   data() {
      return {
          roundData: [],
          scoreData: []
    }
  },
  computed: mapState({
      userData: state => state.UserData.user,
  }),
  methods:{
     updateSummaryScore() {
        for (this.item in this.participants.game[0].table_id.participant_id) {
          this.$refs.row[this.item].updateFromPartEvalFields();
        }
        JudgeSerivce.finishParticipantScore(this.userData.id, this.participants.game[0].round_id.id).then(
            this.$store.dispatch('VotingData/getParticipants', {roundID: this.round, judgeID: this.userData.id})
        )
     },
     getFinishedScore(dict) {
       if (dict[''.concat('round_', this.round, '_finished')] === true) {
          let aggregatedData = []
          this.participants.game[0].table_id.participant_id.forEach(
              value => {
                aggregatedData.push({
                   name: value.name,
                   score: value.participant_score[0].client_centricity +
                    value.participant_score[0].result_management  +
                    value.participant_score[0].self_management
                })
              }
          )
          aggregatedData.sort((a, b) => (a.score < b.score) ? 1 : -1)
          for (var i = 1; i <= aggregatedData.length; i++) {
             aggregatedData[i-1]['rating'] = i
          }
          this.scoreData = aggregatedData
          return true
       }
       return false
          // return !!dict[''.concat('round_', this.round, '_finished')];
     }

  }
}
</script>

<style scoped>
</style>