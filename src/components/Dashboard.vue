<template>

    <div class="dashboard">

           <div class="navigation" v-if="userData.name != null">
                <router-link class="navigation__link" to="/voting">Голосование</router-link>
           </div>
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
  },
   beforeCreate() {
        document.body.className = 'dashboard';
    },
}
</script>

<style scoped>

</style>