
<template>
<div class="container">
   <avatar-fields :participantAvatarPath="rowData.img"></avatar-fields>
   <participant-info-field :item="rowData"></participant-info-field>
   <participant-evaluation-field :item="rowData"></participant-evaluation-field>
</div>
</template>

<script>
import AvatarFields from '@/components/VoteDashboard/ParticipantRow/AvatarFields.vue'
import ParticipantEvaluationField from "./ParticipantRow/ParticipantEvaluationField";
import ParticipantInfoField from "./ParticipantRow/ParticipantInfoField";
export default{
  props: ['rowData'],
  components: {
    AvatarFields,
    ParticipantEvaluationField,
    ParticipantInfoField
  },
}
</script>

<style scoped>
 .container {
  display: flex;
  flex-direction: row;
  }
</style>