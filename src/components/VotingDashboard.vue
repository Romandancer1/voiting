<template>
  <div class="voting">
     <spinner v-if="participantDataLoaded && userDataLoaded"></spinner>
     <div class="voting__container" v-else>
      <div class="navigation">
        <router-link class="navigation__link" to="/dashboard">Общий рейтинг</router-link>
      </div>
      <div class="participant__image">
         <img style="height: 60px;" :src="require(`@/assets/avatar.png`)"/>
      </div>
      <div class="voting__name">
           <span>Имя жюри: <strong>{{userData.name}}</strong></span>
      </div>
      <div style="padding-bottom: 10px">
        <span >Вы оцениваете</span>
      </div>
          
      <div class="voting__table">
        <span> Cтол №{{participantList.game[0].table_id.table_id}}</span>
      </div>
      <div class="round-select__wrapper">
          <button class="round-select__button" :class="{button__active:round == 1}" v-on:click="loadRound(1)">Раунд 1</button>
          <button class="round-select__button" :class="{button__active:round == 2}" v-on:click="loadRound(2)">Раунд 2</button>
          <button class="round-select__button" :class="{button__active:round == 3}" v-on:click="loadRound(3)">Раунд 3</button>
      </div>
      <participant-table :round="round"
                         :participants=participantList>
      </participant-table>
      </div>
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
    beforeCreate() {
        document.body.className = 'voting';
    },
    data() {
        return {
            round: 1,
            roundData:[]
      }
    },
    beforeMount() {
      if(this.userData.name === null){
        this.$store.dispatch('UserData/loadUser')
      } else {
        this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: this.userData.id})
      }
    },
    computed: mapState({
      participantList: state => state.VotingData.participantList,
      participantDataLoaded: state => state.VotingData.participantDataLoaded,
      userData: state => state.UserData.user,
      userDataLoaded: state => state.UserData.userDataLoaded
    }),
    methods: {
      loadRound(roundID) {
         this.$store.dispatch('VotingData/getParticipants', {roundID: roundID, judgeID: this.userData.id})
         this.round = roundID
      }
    },
    watch: {
      userDataLoaded: function(newValue) {
        if (newValue === false) {
          this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: this.userData.id})
        }
      }
    }
}
</script>

<style scoped>

</style>