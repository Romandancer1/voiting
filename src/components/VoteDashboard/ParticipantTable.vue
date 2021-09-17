<template>
    <div>
      <div v-if="participants.game[0].round_id.is_finished" style="max-width: 200px; color: red">
        <span> Данный раунд завершен. Измененить оценку более невозможно </span>
      </div>
<!--      <spinner v-if="participantDataLoaded"></spinner>-->
<!--      <div v-else>-->
          <div v-if="!participantDataLoaded && getFinishedScore(participants.game[0].judge_id)">
                <div class="voting__score">
                    <p>Имя участника</p>
                    <p class="voting__score--short">Баллы</p>
                    <p class="voting__score--short">Ранг</p>
                </div>
                <participant-score-table :score-data="scoreData2"></participant-score-table>
          </div>
           <div v-else-if="participants.game[0].judge_id[''.concat('round_', this.round, '_finished')] === false">
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
<!--      </div>-->

    </div>
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow';
import {mapState} from "vuex";
import JudgeSerivce from "@/service/judge.service";
import ParticipantScoreTable from "./ParticipantScoreTable";
// import Spinner from 'vue-simple-spinner';

export default {
  name: "ParticipantTable",
  props:['participants', 'round'],
  components: {
      ParticipantRow,
      ParticipantScoreTable,
      // Spinner
  },
   data() {
      return {
          roundData: [],
          scoreData2: {},
    }
  },
  computed: mapState({
      userData: state => state.UserData.user,
      participantDataLoaded: state => state.VotingData.participantDataLoaded,
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
       if (this.participants['game'].length > 0) {
          if (dict[''.concat('round_', this.round, '_finished')] === true) {
            let aggregatedData = []
            let searchedData = this.participants['game'][0]['table_id']['participant_id'].slice()
            searchedData.forEach(
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
              aggregatedData[i - 1]['rating'] = i
              
            }
           
            // for (var i = 1; i<=aggregatedData.length; i++){
            //   this.scoreData[i-1]['rating'] = i
            //   console.log(aggregatedData[i])

            // }
            // this.scoreData = aggregatedData
            this.scoreData2= aggregatedData
            console.log(this.scoreData2)

            return true
            
          }
       }

       return false
     }

  },
  mounted:{
    
  }
}
</script>

<style scoped>
</style>