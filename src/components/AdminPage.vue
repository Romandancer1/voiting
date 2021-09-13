<template>
    <div class="admin">
        <div class="admin__round" v-for="item in roundData.rounds"
                    :key="item.id"
                    :rowData="item"
        >
          <span>Раунд {{item.id}}</span>
          <button :disabled="item.is_finished"
                  @click="finishRound(item.id)">
                  <span v-if="item.is_finished">Раунд завершен</span>
                  <span v-else>Завершить раунд</span>
          </button>
        </div>
        <button class="admin__download">
            Выгрузить результаты в excel
        </button>

        <div v-for="item in userData" :key="item">
          <p v-text="item"></p>
        </div>

    </div>
</template>

<script>
import AdminSerivce from "@/service/admin.service"
import {mapState} from "vuex";

export default {
name: "AdminPage",
  data() {
      return {
          roundData: []
    }
  },
  beforeMount() {
      this.updateRounds()
      if(this.userData.name === null){
        this.$store.dispatch('UserData/loadUser')
      } else {
        console.log('pidr')
        this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: this.userData.id})
      }
      // this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: this.userData.id})
    }, 
  computed: mapState({
      participantList: state => state.VotingData.participantList,
      participantDataLoaded: state => state.VotingData.participantDataLoaded,
      userData: state => state.UserData.user,
      userDataLoaded: state => state.UserData.userDataLoaded
    }),
  methods: {
      finishRound(roundID) {
        AdminSerivce.finishRound(roundID)
            .then(response => {
                console.log(response)
                this.updateRounds()
        })
      },
      updateRounds() {
         AdminSerivce.getAllRounds().then(response => {
            this.roundData = response.data
        })
      }
  }
}
</script>

<style scoped>

</style>