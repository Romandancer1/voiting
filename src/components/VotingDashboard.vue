<template>
  <div class="voting">
     <div class="voting__container">
      <div class="round-select__wrapper">
          <button class="round-select__button" v-on:click="loadRound(1)">Раунд 1</button>
          <button class="round-select__button" v-on:click="loadRound(2)">Раунд 2</button>
          <button class="round-select__button" v-on:click="loadRound(3)">Раунд 3</button>
      </div>
      <spinner v-if="participantDataLoaded"></spinner>
      <participant-table v-else
                         v-bind:participants=participantList>
       </participant-table>

  </div>

<!--      <div class="round-table__name">-->

<!--      </div>-->

<!--    <div class="tab" >-->
<!--      <button class="tab-button" @click="newParticipants=participants1.slice()">Стол 1</button>-->
<!--      <button class="tab-button" @click="newParticipants=participants2.slice()">Стол 2</button>-->
<!--      <button class="tab-button" @click="newParticipants=participants3.slice()">Стол 3</button>-->
<!--      <VotingDashboard :participants="newParticipants"/>-->
<!--    </div>-->



    </div>
</template>

<script>

import Spinner from 'vue-simple-spinner';
import ParticipantTable from "@/components/VoteDashboard/ParticipantTable";
import {mapState} from "vuex";

export default {
    components: {
        Spinner,
        ParticipantTable
    },
    mounted() {
       this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: 1})
    },
    computed: mapState({
      participantList: state => state.VotingData.participantList,
      participantDataLoaded: state => state.VotingData.participantDataLoaded
    }),
    methods: {
      loadRound(roundID) {
         this.$store.dispatch('VotingData/getParticipants', {roundID: roundID, judgeID: 1})
      }
    }
}
</script>

<style scoped>

</style>