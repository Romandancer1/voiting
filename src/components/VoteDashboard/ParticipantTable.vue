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
      />
      <div style="text-align: center">
        <!-- {{participants.game[0].round_id}} -->
        <button class="round-select__button" 
          :disabled="participants.game[0].round_id.is_finished"
                  @click="finishRound(round)">
            <span v-if="participants.game[0].round_id.is_finished">Раунд завершен</span>
            <span v-else>Завершить раунд</span>
        </button>  
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
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow'
import AdminSerivce from "@/service/admin.service"

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
      // if(this.userData.name === null){
      //   this.$store.dispatch('UserData/loadUser')
      // } else {
      //   console.log('pidr')
      //   this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: this.userData.id})
      // }
      // this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: this.userData.id})
    }, 
    provide(){
    return{
      reload:this.reload
    }
  },
  methods:{
     finishRound(roundID) {
        AdminSerivce.finishRound(roundID)
            .then(response => {
                console.log(response)
                this.updateRounds()
        });
        window.location.reload();
        // VotingService.closeParticipantScore({
        //   roundID: this.roundData.rounds[round-1].id,
        //   }).then(
        //     this.$store.dispatch('VotingData/getParticipants', {roundID: this.roundData.rounds[round-1].id})
        // )
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