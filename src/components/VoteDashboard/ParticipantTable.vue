<template>
    <div>
      <div v-if="isCurrentRoundFinished" style="max-width: auto; color: red; margin-bottom: 20px; text-aling:center;">
        <span style="padding-left:26%" v-show="!participantDataLoaded">Данный раунд завершен</span>
      </div>
     <p v-if="participantDataLoaded">Load</p>
      <spinner v-if="participantDataLoaded"></spinner>
      <div v-else>
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

          <modal-template-feedback
              :email="this.participants.game[0].judge_id.email"
              :round="this.round"
              :id="this.participants.game[0].judge_id.id"
              :participants="this.participants"

              v-if="participants.game[0].judge_id.round_3_finished && !participants.game[0].judge_id.is_feedback_sent"
              @close="participants.game[0].judge_id.is_feedback_sent == true"
            >
          </modal-template-feedback>

<!-- <p>{{this.scoreData}}</p> -->
      
      </div>
      

    </div>
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow';
import {mapState} from "vuex";
import JudgeSerivce from "@/service/judge.service";
import ModalTemplateFeedback from "./ParticipantRow/ModalTemplateFeedback";
// import ParticipantScoreTable from "./ParticipantScoreTable";
import Spinner from 'vue-simple-spinner';

export default {
  name: "ParticipantTable",
  props:['participants', 'round'],
  components: {
    ModalTemplateFeedback,
    ParticipantRow,
      // ParticipantScoreTable,
    Spinner
  },
   data() {
      return {
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
       for (let i = 0;  i < this.participants.game[0].table_id.participant_id.length; i++) {
          setTimeout(() => {
             this.$refs.row[i].updateFromPartEvalFields();
          }, i * 1000);
        }
        // for (this.item in this.participants.game[0].table_id.participant_id) {
        //   // console.log(this.item)
        //   setTimeout(() => {
        //      console.log(this.item)
        //      this.$refs.row[this.item].updateFromPartEvalFields();
        //   },  this.item * 1000);
        // }
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