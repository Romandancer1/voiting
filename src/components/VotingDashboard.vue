<template>
  <div class="voting">
     <button class="voting__logout"
             @click="logout()"
     >Выйти</button>
     <spinner v-if="participantDataLoaded && userDataLoaded"></spinner>
     <div class="voting__container" v-else>
      
       <judge-avatar :participantAvatarPath="userData.portrait"></judge-avatar>
      <div class="voting__name">
           <span>Имя жюри: <strong>{{userData.name}}</strong></span>
      </div>
      <div style="padding-bottom: 10px">
        <span >Вы оцениваете</span>
      </div>
          
      <div class="voting__table">
          <spinner v-if="participantDataLoaded"></spinner>
<!--          <span v-else> Cтол №{{participantList.game[0].table_id.table_id}}</span>-->
          <span v-else> Команду № {{tableID}}</span>
      </div>
      <div class="round-select__wrapper">
          <button class="round-select__button" :class="{button__active:round == 1}" v-on:click="loadRound(1)">Раунд 1</button>
          <button class="round-select__button" :class="{button__active:round == 2}" v-on:click="loadRound(2)">Раунд 2</button>
          <button class="round-select__button" :class="{button__active:round == 3}" v-on:click="loadRound(3)">Раунд 3</button>
      </div>
      <participant-table :round="round"
                         :participants=participantList>
      </participant-table>
      <div class="navigation">
        <router-link class="navigation__link" to="/dashboard">Общий рейтинг</router-link>
      </div>
      </div>
      
    </div>
</template>

<script>

import Spinner from 'vue-simple-spinner';
import ParticipantTable from "@/components/VoteDashboard/ParticipantTable";
import JudgeAvatar from "@/components/VoteDashboard/JudgeAvatar";
import {mapState} from "vuex";

export default {
    components: {
        Spinner,
        ParticipantTable,
        JudgeAvatar
    },
    beforeCreate() {
        document.body.className = 'voting';
    },
    data() {
        return {
            round: 1,
            roundData:[],
            tableID: null
      }
    },
    created() {
      if (this.$route.query.roundID) {
        this.round = this.$route.query.roundID
      }
      if(this.userData.name === null){
        this.$store.dispatch('UserData/loadUser')
      } else {
        this.$store.dispatch('VotingData/getParticipants', {roundID: this.round, judgeID: this.userData.id})
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
      },
      getActiveTable(){
          this.tableID = this.$store.getters['VotingData/getCurrentTableID']
      },
      logout() {
        this.$store.dispatch('auth/logout');
        this.$router.push('/login');
      }
    },
    watch: {
      userDataLoaded: function(newValue) {
        if (newValue === false) {
          this.$store.dispatch('VotingData/getParticipants', {roundID: this.round, judgeID: this.userData.id})
        }
      },
      participantList: function () {
         this.getActiveTable()
      }
    }
}
</script>

<style scoped>

</style>