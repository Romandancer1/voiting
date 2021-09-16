<template>
      <div class="voting__score">
          <p>{{score.name}}</p>
          <p class="voting__score--short">{{score.score}}</p>
          <p class="voting__score--short">{{score.rating}}</p>
      </div>
</template>

<script>
export default {
  name: "ParticipantScore",
  props: ['score']
}
</script>

<style scoped>

</style>