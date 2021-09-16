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

        <div v-show="showTable" class="admin_table_">
            <div class="admin_table_row">
              <div class="admin_table_column"><strong>ФИО</strong></div>
              <div class="admin_table_columns"><strong>Раунд 1</strong></div>
              <div class="admin_table_columns"><strong>Раунд 2</strong></div>
              <div class="admin_table_columns"><strong>Раунд 3</strong></div>
            </div>
            <div v-for="item in judgeData" :key="item.id">
                <div class="admin_table_row">
                    <div class="admin_table_column" >
                      <p>{{judgeData[item.id-1].name}}</p>
                    </div>
                    <div class="admin_table_columns">
                      <p v-if="judgeData[item.id-1].round_1_finished">&#10004;&#65039;</p>
                      <p v-else>&#10006;</p>
                    </div>
                    <div class="admin_table_columns">
                      <p v-if="judgeData[item.id-1].round_2_finished">&#10004;&#65039;</p>
                      <p v-else>&#10006;</p>
                    </div>
                    <div class="admin_table_columns">
                      <p v-if="judgeData[item.id-1].round_3_finished"> &#10004;&#65039;</p>
                      <p v-else>&#10006;</p>
                    </div>
                </div>
            </div>
          </div>  
        <div style="text-align: center;">
          <button class="admin__download">
            Выгрузить результаты в excel
        </button>
        </div>
        <!-- <div >
          <button @click="getFinished()">btn</button>
        </div> -->
      </div>
        <!-- <div v-for="it in participantList.game[0].round_id" :key="it">
            {{it}}
        </div>
        <div  >
          {{participantList}}
        </div>
        <div>{{roundData}}</div>
      <div v-for="i in roundData.rounds"
            :key="i.id">
        <strong v-if="participantList.game[0].round_id.is_finished">{{participantList.game[0].judge_id.name}} 
          раунд {{participantList.game[0].round_id.id}} завершил</strong>
        </div> -->
</template>

<script>
import JudgeService from "@/service/judge.service"
import AdminSerivce from "@/service/admin.service"
import {mapState} from "vuex";


export default {
name: "AdminPage",
  data() {
      return {
        judgeData:[],
        roundData: [],
        round:1,
        showTable: false,
    }
  },
  beforeMount() {
      this.getFinished();
      this.updateRounds();
      if(this.userData.name === null){
        this.$store.dispatch('UserData/loadUser')
      } else {
        this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: this.userData.id})
      }
      // this.$store.dispatch('VotingData/getParticipants', {roundID: 1, judgeID: this.userData.id})
  },
  mounted() {
       setInterval(() =>  {
            this.getFinished()}
         ,60 * 1000);

  },
  computed:mapState({
      participantList: state => state.VotingData.participantList,
      participantDataLoaded: state => state.VotingData.participantDataLoaded,
      userData: state => state.UserData.user,
      userDataLoaded: state => state.UserData.userDataLoaded
    }),
  methods:{
      finishRound(roundID) {
        AdminSerivce.finishRound(roundID)
            .then(response => {
                console.log(response)
                this.updateRounds();

        })
      },
      updateRounds() {
         AdminSerivce.getAllRounds().then(response => {
            this.roundData = response.data;
        })
      },
      getFinished(){
        JudgeService.getFinished().then(response => {
          this.judgeData = response.judge;
        });
        this.showTable=true;
  }
  }
}
</script>

<style scoped>

</style>