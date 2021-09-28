<template>
    <div class="voting__row-participant-info">
<!-- <p>{{this.participantList.game[0].table_id.participant_id}}</p> -->
        <p><strong>{{item.name}}</strong></p>
        <p>{{item.tb}}</p>
        <p>{{item.post}} </p>
        <p>{{item.department}}</p>
        <!-- <div class="voting__score"> -->
            <!-- <p v-if="this.scoreData.name==item.name">+++++</p>
          <p>{{this.scoreData}}</p> -->
        <div  v-for=" i in this.scoreData" :key="i.id">
            
            <!-- <p v-if="i.name==item.name" class="voting__score--short" >Общий счёт: {{i.score}} Ранг: {{i.rating}}</p> -->
            <div v-if="i.name==item.name" class="voting__score--short" >

                 <p v-if="i.score!=null"><strong>Общий счёт: {{i.score}}</strong> </p>  
                 <p><strong>Ранг: {{i.rating}}</strong> </p>  
            </div>
            
            <!-- <p v-if="i.name==item.name" class="voting__score--short">Ранг {{i.rating}}</p> -->
        </div>
          
          <!-- <p class="voting__score--short">Ранг</p> -->
          <!-- score.rating -->
      <!-- </div> -->
        <div> 
            <div></div>
        </div>

    </div>  
</template>

<script>
import {mapState} from "vuex";
export default {
    data() {
      return {
          scoreData: [],
      }
    },
    props:{
        judgeID:{},
        roundID:{},
        item:{
            type: Object,
            require:true
        }
    },
//     beforeUpdate(){
// for (this.item in this.participantList.game[0].table_id.participant_id) {
//           this.$refs.row[this.item].updateFromPartEvalFields();
//         }
//     },
// beforeMount(){
//   for (i in this.participantList.game[0].table_id.participant_id) {
//           this.$refs.row[i].updateFromPartEvalFields();
//         }
// },
    
    mounted() {
      this.getRoundStatus()
  },
    computed: mapState({
       participantList: state => state.VotingData.participantList,
       participantDataLoaded: state => state.VotingData.participantDataLoaded,
    }),
    methods:{
      getRoundStatus() {
       if(this.participantList.length !== 0 && !this.participantDataLoaded ) {
          this.scoreData = this.$store.getters['VotingData/getFinishedScore'](this.judgeID.id, this.roundID.id)
          // console.log(this.scoreData)

       }
     },
  },
  watch: {
    participantList: function () {
        this.getRoundStatus()
        
    }
  }
}
</script>

<style scoped>

</style>