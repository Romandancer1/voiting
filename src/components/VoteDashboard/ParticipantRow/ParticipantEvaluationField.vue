<template>
        <div class="voting__row-participant-score">
            <div class="voting__row-participant-score-item">
                Управление результатом/ответственность
                 <select class="voting__select" 
                    :disabled="roundID.is_finished"
                    v-model="user_selected_option.resultManagment"
                    @change="updateScore">
                        <option v-for="n in getNumbers(1, 5, 0.5)" :key="n" :value="n">{{ n }} </option>
                </select>
            </div>
            <div class="voting__row-participant-score-item">
                Управление собой
                <!-- :disabled="roundID.is_finished" -->
                <select  class="voting__select" 
                    :disabled="roundID.is_finished"
                    v-model="user_selected_option.selfManagment"
                    @change="updateScore">
                        <option v-for="n in getNumbers(1, 5, 0.5)" :key="n" :value="n">{{ n }} </option>
                </select>
            </div>
            <div class="voting__row-participant-score-item">
                Клиентоцентричность
                <select  class="voting__select" 
                    :disabled="roundID.is_finished"
                    v-model="user_selected_option.clientCentricity"
                    @change="updateScore">
                        <option v-for="n in getNumbers(1, 5, 0.5)" :key="n" :value="n">{{ n }} </option>
                </select>
            
            </div>
            <div class="round-select__wrapper">
            
        
      </div>

           
        </div>
</template>

<script>

import Participant from "@/models/participant";
import VotingService from "@/service/voting.service";
import {mapState} from "vuex";

export default {
    props:['item', 'judgeID', 'roundID'],
    data(){
        return{
            user_selected_option: new Participant(this.roundID.id, this.judgeID, this.item),
        }
    },
     computed: {
      ...mapState ({
          userData: state => state.UserData.user,
        })
    },
    methods:{
      getNumbers:function(start=1.5,stop=5,step = 0.5){
        return new Array(stop / step).fill(start).map((n,i)=>(i+1)*step);
      },
      updateScore() {
        VotingService.saveParticipantScore({
          roundID: this.user_selected_option.roundID,
          judgeID: this.user_selected_option.judgeID,
          participantID: this.user_selected_option.participantID,
          result_management: this.user_selected_option.resultManagment,
          self_management: this.user_selected_option.selfManagment,
          client_centricity: this.user_selected_option.clientCentricity
        }).then(
            this.$store.dispatch('VotingData/getParticipants', {roundID: this.roundID.id, judgeID: this.userData.id})
        )
      },
    //   finishRound(roundID) {
    //     AdminSerivce.finishRound(roundID)
    //         .then(response => {
    //             console.log(response)
    //             this.updateRounds()
    //     })
    //   },
    //   updateRounds() {
    //      AdminSerivce.getAllRounds().then(response => {
    //         this.roundData = response.data
    //     })
    //   }
    }
}
</script>

<style scoped>

</style>