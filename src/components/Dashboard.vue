<template>
    <div class="dashboard">
          <participant-bar-chart></participant-bar-chart>
    </div>
</template>

<script>


import ParticipantBarChart from "@/components/dashboard/ParticipantBarChart";
import { mapState } from 'vuex';

export default {
  name: "Dashboard",
  computed: {
    ...mapState ({
        userData: state => state.UserData.user,
      })
  },
  components: {
    ParticipantBarChart
  },
  created() {
    if(this.userData.name === null){
      this.$store.dispatch('UserData/loadUser')
    }
  }
}
</script>

<style scoped>

</style>