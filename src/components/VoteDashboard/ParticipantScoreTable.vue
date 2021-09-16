<template>

            <div>
              <participant-score v-for="item in scoreData"
                                 :key="item.rating"
                                 :score="item"
              >

              </participant-score>
            </div>
</template>

<script>

import ParticipantScore from "./ParticipantScore";
export default {
name: "ParticipantScoreTable",
  props: ['scoreData'],
  components: {
      ParticipantScore
  }
}
</script>

<style scoped>

</style>