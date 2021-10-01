<template>
    <div>
      <div v-if="isCurrentRoundFinished" style="max-width: auto; color: red; margin-bottom: 20px; text-aling:center;">
        <span style="padding-left:26%" v-show="!participantDataLoaded">Данный раунд завершен</span>
      </div>
     <p v-if="participantDataLoaded">Load</p>
      <spinner v-if="participantDataLoaded"></spinner>
      <div v-else>
<!--        <div v-if="isJudgeFinished">-->
          <!-- <div class="voting__score">
            <p>Имя участника</p>
            <p class="voting__score--short">Баллы</p>
            <p class="voting__score--short">Ранг</p>
          </div> -->

          <!-- <participant-score-table :score-data="this.scoreData"></participant-score-table> -->
<!--        </div>-->
        <!-- <div v-else-if="participants.length !== 0" class="voting__participant-judge"> -->
        <div v-if="participants.length !== 0" class="voting__participant-judge">
          
            <ParticipantRow v-for="item in participants.game[0].table_id.participant_id"
              :key="item.id"
              :rowData="item"
              :judge-i-d="participants.game[0].judge_id"
              :roundID = "participants.game[0].round_id"
              ref="row"
            />
          
            <button class="round__end__button"
                    v-if="!isCurrentRoundFinished && !isJudgeFinished"
                    @click="updateSummaryScore()">
                    <spinner class="round__finish" v-if="savingDataSpinner"></spinner>
                    <span v-else>Завершить голосование</span>
            </button>
        </div>
        <!-- {{participants.game[0].judge_id.is_feedback_sent}} -->
        <!-- {{this.participants.lenght}} -->
  <!-- <div v-if="participants.lenght > 0" > -->
      <modal-template-poll 
        :email="this.participants.game[0].judge_id.email"
        :round="this.round"
        :id="this.participants.game[0].judge_id.id"
        :participants="this.participants"
        
        v-if="participants.game[0].judge_id.round_3_finished && !participants.game[0].judge_id.is_feedback_sent" 
        @close="participants.game[0].judge_id.is_feedback_sent == true"
      >
      </modal-template-poll>
  <!-- </div> -->
      </div>
      

    </div>
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow';
import {mapState} from "vuex";
import JudgeSerivce from "@/service/judge.service";
// import ParticipantScoreTable from "./ParticipantScoreTable";
import Spinner from 'vue-simple-spinner';
import ModalTemplatePoll from './ParticipantRow/ModalTemplatePoll.vue';

export default {
  name: "ParticipantTable",
  props:['participants', 'round'],
  components: {
      ParticipantRow,
      // ParticipantScoreTable,
      Spinner,
      ModalTemplatePoll
  },
   data() {
      return {
          // pollData:[],
          showModalTemplate: false,
          roundData: [],
          scoreData: [],
          isCurrentRoundFinished: false,
          isJudgeFinished: false,
          savingDataSpinner: false
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
        this.savingDataSpinner = true
        for (this.item in this.participants.game[0].table_id.participant_id) {
          this.$refs.row[this.item].updateFromPartEvalFields();
        }
        setTimeout(() => {this.reloadPage()}
          , 3000)
     },
     reloadPage() {
        JudgeSerivce.finishParticipantScore(this.userData.id, this.participants.game[0].round_id.id).then(
            this.$store.dispatch('VotingData/getParticipants', {roundID: this.round, judgeID: this.userData.id})
        )
        setTimeout(() => {this.finishScore()}
          , 2000)

     },

     finishScore() {
        this.savingDataSpinner = false
        this.$router.push({
          path: '/voting',
          query: { roundID: this.round },
        })
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