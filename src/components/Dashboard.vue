<template>
    <div class="sim">
          главная

    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: "Dashboard",
  computed: {
    ...mapState ({
        userData: state => state.UserData.user,
      })
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