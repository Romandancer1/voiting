
<template>
<div class="voting__row">
  <div class="voting__row-wrapper">
      <avatar-fields  
        v-show="!roundID.is_finished" 
        :participantAvatarPath="rowData.img">
      </avatar-fields>

      <participant-info-field 
        v-show="!roundID.is_finished" 
        :item="rowData">
      </participant-info-field>
  </div>
  <!-- v-show="!roundID.is_finished" -->
      <participant-evaluation-field 
          v-show="!roundID.is_finished" 
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