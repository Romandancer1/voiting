<template>
        <div class="voting__row-participant-score">
            <div class="voting__row-participant-score-item" :class="{showRating:this.roundID.id == 2}">
                Управление результатом/ответственность 
                <button id="show-modal" class="button__modal" @click="showModalresultManagment = true">?</button>
                <modal-template v-if="showModalresultManagment" @close="showModalresultManagment = false">
                        <h3 slot="header">Управление результатом/ответственность </h3>
                        <p slot="body">Стремится к выдающимся результатам, 
                            четко планирует и приоритизирует, принимает ответственность, 
                            достигает целей, повышает планку</p>
                </modal-template>
                 <select class="voting__select" 
                    :disabled="roundID.is_finished||judgeID[''.concat('round_', roundID.id , '_finished')]"
                    :class="{ voting__select__active: this.user_selected_option.resultManagment!=0 }"
                    v-model="user_selected_option.resultManagment"
                    @change="updateScore">
                        <option v-for="n in getNumbers()" :key="n" :value="n">{{ n }} </option>
                </select>
            </div>
            <div class="voting__row-participant-score-item">
                Управление собой
                <button id="show-modal" class="button__modal" @click="showModalselfManagment = true">?</button>
                <modal-template v-if="showModalselfManagment" @close="showModalselfManagment = false">
                        <h3 slot="header">Управление собой </h3>
                        <p slot="body">Обладает эмоциональным интеллектом,
                             ведет конструктивный диалог, управляет стрессом,
                              постоянно развивается, проявляет жизнестойкость
                        </p>
                </modal-template>
                <!-- :disabled="roundID.is_finished" -->
                <select  class="voting__select"
                    :class="{ voting__select__active: this.user_selected_option.selfManagment!=0 }"
                    :disabled="roundID.is_finished||judgeID[''.concat('round_', roundID.id , '_finished')]"
                    v-model="user_selected_option.selfManagment"
                    @change="updateScore">
                        <option v-for="n in getNumbers()" :key="n" :value="n">{{ n}} </option>
                </select>
            </div>
            <div class="voting__row-participant-score-item" :class="{showRating:this.roundID.id == 1}">
                Клиентоцентричность
                <button id="show-modal" class="button__modal" @click="showModalclientCentricity = true">?</button>
                <modal-template v-if="showModalclientCentricity" @close="showModalclientCentricity = false">
                        <h3 slot="header">Клиентоцентричность</h3>
                        <p slot="body">Определяет потребности клиентов,
                             регулярно собирает обратную связь,
                            строит долгосрочные партнёрские отношения.
                        </p>
                </modal-template>
                <select  class="voting__select" 
                    :disabled="roundID.is_finished||judgeID[''.concat('round_', roundID.id , '_finished')]"
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
// import ModalTemplate from  '@/components/VoteDashboard/ParticipantRow/ModaltTemplate';
import {mapState} from "vuex";
import ModalTemplate from './ModalTemplate.vue';
export default {
    props:['item', 'judgeID', 'roundID'],
    data(){
        return{
            showModalresultManagment:false,
            showModalselfManagment:false,
            showModalclientCentricity: false,
            user_selected_option: new Participant(this.roundID.id, this.judgeID, this.item),
        }
    },
    components:{
        ModalTemplate
    },
    // beforeMount(){
    //     this.updateScore();
    // },
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