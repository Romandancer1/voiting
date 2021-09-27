
<template>
<div class="voting__row">
  <div class="voting__row-wrapper">
      <avatar-fields  
        :participantAvatarPath="rowData.portrait">
      </avatar-fields>

      <participant-info-field 
        :item="rowData"
        :roundID="roundID"
        :judgeID="judgeID" 
        >
      </participant-info-field>
  </div>
  <!-- v-show="!roundID.is_finished" -->
      <participant-evaluation-field 
          
          :item="rowData" :judgeID="judgeID" 
          :roundID="roundID"
          ref="evaluation">
      </participant-evaluation-field>
</div>
</template>

<script>
import AvatarFields from '@/components/VoteDashboard/ParticipantRow/AvatarFields.vue'
import ParticipantEvaluationField from "./ParticipantRow/ParticipantEvaluationField";
import ParticipantInfoField from "./ParticipantRow/ParticipantInfoField";

export default{
  props: ['rowData', 'judgeID', 'roundID'],
  components: {
    AvatarFields,
    ParticipantEvaluationField,
    ParticipantInfoField
  },
  methods:{
    updateFromPartEvalFields(){
      this.updateScr()
    },
    updateScr(){
       this.$refs.evaluation.updateScore();
    }

  },
}
</script>

<style scoped>
</style>