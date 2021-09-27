<template>
        <div class="voting__row-participant-score">
            <div class="voting__row-participant-score-item">
                Управление результатом/ответственность
                 <select class="voting__select" 
                    :disabled="roundID.is_finished"
                    :class="{ voting__select__active: this.user_selected_option.resultManagment!=0 }"
                    v-model="user_selected_option.resultManagment"
                    @change="updateScore">
                        <option v-for="n in getNumbers()" :key="n" :value="n">{{ n }} </option>
                </select>
            </div>
            <div class="voting__row-participant-score-item">
                Управление собой
                <!-- :disabled="roundID.is_finished" -->
                <select  class="voting__select"
                    :class="{ voting__select__active: this.user_selected_option.selfManagment!=0 }"
                    :disabled="roundID.is_finished"
                    v-model="user_selected_option.selfManagment"
                    @change="updateScore">
                        <option v-for="n in getNumbers()" :key="n" :value="n">{{ n}} </option>
                </select>
            </div>
            <div class="voting__row-participant-score-item">
                Клиентоцентричность
                <select  class="voting__select" 
                    :disabled="roundID.is_finished"
                    :class="{ voting__select__active: this.user_selected_option.clientCentricity!=0 }"
                    v-model="user_selected_option.clientCentricity"
                    @change="updateScore">
                        <option v-for="n in getNumbers()" :key="n" :value="n" >{{ n }} </option>
                </select>
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
      getNumbers:function(start=0,stop=3,step=1){
        return new Array(stop / step).fill(start).map((n,i)=>(i)*step);
        //return [...Array(stop / step).fill(start).keys()].map(i => i*step  + start);
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
            this.$store.dispatch('VotingData/getPart', {roundID: this.roundID.id, judgeID: this.userData.id})
        )
      },
    }
}
</script>

<style scoped>
</style>