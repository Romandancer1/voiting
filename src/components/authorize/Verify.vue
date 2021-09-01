<template>
   <div class="authorization">
       <div class="authorization__container">
           <div v-if="isEmailVerified">
            <h4>Ваш email успешно подтвержден</h4>
            <router-link class="authorization__footer-link" to="/login">Войти</router-link>
         </div>
       </div>
  </div>

</template>

<script>
import AuthService from "@/service/auth.service"
export default {
  name: "Verify",
  data() {
    return {
      isEmailVerified: false
    }
  },
  created() {
    let verifyCode = this.$route.query.code
    if (verifyCode === undefined) {
      this.$router.push('/notfound')
    } else {
       AuthService.verifyEmailCode(verifyCode)
          .then(() => {
                  this.isEmailVerified = true
              }
          )
          .error(() => {
              this.$router.push('/notfound')
          })
    }
  }
}
</script>

<style scoped>
</style>
