<template>
    <div>
      <!-- <div v-if="participants.game[0].round_id.is_finished" style="max-width: 200px; color: red">
        <span> Данный раунд завершен. Измененить оценку более невозможно </span>
      </div> -->
      <ParticipantRow v-for="item in participants.game[0].table_id.participant_id"
                        :key="item.id"
                        :rowData="item"
                        :judge-i-d="participants.game[0].judge_id"
                        :roundID = "participants.game[0].round_id"
                        ref="row"
      />
      <div style="text-align: center">
        <!-- {{participants.game[0].round_id}} -->
        <!-- @click="finishRound(round)" -->
        <button class="round-select__button" 
          :disabled="participants.game[0].round_id.is_finished"
                  @click="finishRound(round); updateSummaryScore()"
                  >
            <span v-if="participants.game[0].round_id.is_finished">Раунд завершен</span>
            <span v-else>Завершить раунд</span>
        </button>  
        <button @click="updateSummaryScore()">lo</button>
      </div>
      <!-- <div style="text-align: center">
        <button class="round-select__button" 
          :disabled="roundData.rounds[round-1].is_finished"
                  @click="finishRound(roundData.rounds[round-1].id)">
            <span v-if="roundData.rounds[round-1].is_finished">Раунд завершен</span>
            <span v-else>Завершить раунд</span>
        </button>  
      </div> -->
       
    </div>
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow';
import AdminSerivce from "@/service/admin.service";
export default {
  name: "ParticipantTable.vue",
  props:['participants', 'round'],
  components: {
      ParticipantRow
  },
   data() {
      return {
          roundData: []
    }
  },
  beforeMount() {
      this.updateRounds()
    }, 
    provide(){
    return{
      reload:this.reload
    }
  },
  methods:{
     updateSummaryScore() {
        //TODO сделать цикл по всем row !DONE
        for (this.item in this.participants.game[0].table_id.participant_id) {
          this.$refs.row[this.item].updateFromPartEvalFields();
        }
     },
     finishRound(roundID) {
        AdminSerivce.finishRound(roundID)
            .then(response => {
                console.log(response)
                this.updateRounds()
        });
        // this.updateSummaryScore();
        window.location.reload();
      },
      updateRounds() {
         AdminSerivce.getAllRounds().then(response => {
            this.roundData = response.data
        })
      },
  }
}
</script>

<style scoped>
</style>