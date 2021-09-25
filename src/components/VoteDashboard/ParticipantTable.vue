<template>
    <div>
      <div v-if="isCurrentRoundFinished" style="max-width: 200px; color: red">
        <span> Данный раунд завершен</span>
      </div>
<!--      <p v-if="participantDataLoaded">Load</p>-->
      <spinner v-if="participantDataLoaded"></spinner>
      <div v-else>
        <div v-if="isJudgeFinished">
          <div class="voting__score">
            <p>Имя участника</p>
            <p class="voting__score--short">Баллы</p>
            <p class="voting__score--short">Ранг</p>
          </div>

          <participant-score-table :score-data="this.scoreData"></participant-score-table>
        </div>
       <div v-else-if="participants.length !== 0">
            <ParticipantRow v-for="item in participants.game[0].table_id.participant_id"
              :key="item.id"
              :rowData="item"
              :judge-i-d="participants.game[0].judge_id"
              :roundID = "participants.game[0].round_id"
              ref="row"
            />
          

      </div>
      
      </div>
      
            <button class="round__end__button"
                    v-if="!isCurrentRoundFinished && !isJudgeFinished"
                    @click="updateSummaryScore()">
                    Завершить голосование
            </button>
        
    </div>
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow';
import {mapState} from "vuex";
import JudgeSerivce from "@/service/judge.service";
import ParticipantScoreTable from "./ParticipantScoreTable";
import Spinner from 'vue-simple-spinner';

export default {
  name: "ParticipantTable",
  props:['participants', 'round'],
  components: {
      ParticipantRow,
      ParticipantScoreTable,
      Spinner
  },
   data() {
      return {
          roundData: [],
          scoreData: [],
          isCurrentRoundFinished: false,
          isJudgeFinished: false
    }
  },
  mounted() {
      this.getRoundStatus()
  },
  computed: mapState({
      userData: state => state.UserData.user,
      participantDataLoaded: state => state.VotingData.participantDataLoaded,
  }),
  methods:{
     updateSummaryScore() {
        this.$store.commit('VotingData/updateLoadingStatus', true)
        for (this.item in this.participants.game[0].table_id.participant_id) {
          this.$refs.row[this.item].updateFromPartEvalFields();
        }
        JudgeSerivce.finishParticipantScore(this.userData.id, this.participants.game[0].round_id.id).then(
            this.$store.dispatch('VotingData/getParticipants', {roundID: this.round, judgeID: this.userData.id})
        )
        this.$router.go()
     },
     getRoundStatus() {
       if(this.participants.length !== 0) {
          this.isCurrentRoundFinished =  this.$store.getters['VotingData/isRoundFinished']
          this.isJudgeFinished = this.$store.getters['VotingData/isCurrentScoreFinished'](this.round)
          this.scoreData = this.$store.getters['VotingData/getFinishedScore'](this.participants.game[0].judge_id, this.round)
       }
     },
  },
  watch: {
    participants: function () {
        this.getRoundStatus()
    }
  }
}
</script>

<style scoped>
</style>