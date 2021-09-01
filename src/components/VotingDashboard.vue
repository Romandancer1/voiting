<template>
    <div class="voting_container">
      <div class="round-select__wrapper">
          <button class="round-select__button" v-on:click="loadRound(1)">Раунд 1</button>
          <button class="round-select__button" v-on:click="loadRound(2)">Раунд 2</button>
          <button class="round-select__button" v-on:click="loadRound(3)">Раунд 3</button>
      </div>
<!--      <div class="round-table__name">-->

<!--      </div>-->

<!--    <div class="tab" >-->
<!--      <button class="tab-button" @click="newParticipants=participants1.slice()">Стол 1</button>-->
<!--      <button class="tab-button" @click="newParticipants=participants2.slice()">Стол 2</button>-->
<!--      <button class="tab-button" @click="newParticipants=participants3.slice()">Стол 3</button>-->
<!--      <VotingDashboard :participants="newParticipants"/>-->
<!--    </div>-->


<!--        <ParticipantRow v-for="item in participants"-->
<!--                        :key="item.id"-->
<!--                        :rowData="item"-->
<!--        />-->
    </div>
</template>

<script>
// import ParticipantRow from '@/components/VoteDashboard/ParticipantRow'
export default {
    // components: {
    //     ParticipantRow
    // },
    // props:['participants'],
}
</script>

<style scoped>

</style>