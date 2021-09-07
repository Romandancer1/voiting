<template>
    <div class="authorization__container">
    <div>
      <h4>Авторизация</h4>
      <form v-on:submit.prevent>
        <div class="authorization__wrapper">
          <label for="userEmail">Email</label>
          <input v-model.lazy="$v.user.email.$model"
                 id="userEmail"
          >
        </div>
        <button v-on:click="login" class="login__submit">
          <spinner class="login__submit-spinner"  v-if="loginStatus"></spinner>
          <span v-else>Войти</span>
        </button>
<!--        </button>-->
        <div class="login__failed-wrapper">
            <p class="authorization__input--error-message"
                v-if="isLoginFailed">
              {{isLoginFailedData}}
            </p>
        </div>

      </form>

<!--      <div class="authorization__footer authorization__footer&#45;&#45;justify-space">-->
<!--        <span class="authorization__footer-text">Нет аккаунта? </span>-->
<!--        <router-link to="/register" class="authorization__footer-link">Зарегистрироваться</router-link>-->
<!--      </div>-->
    </div>
  </div>

</template>

<script>
import User from "../../models/user";
import Spinner from 'vue-simple-spinner';
import { mapState } from 'vuex';
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: "Login",
  data() {
    return {
      user: new User('', '', '', '', ''),
      isLoginFailed: false,
      isLoginFailedData: null,
      submitStatus: null
    }
  },
  components: {
    Spinner
  },
  computed: mapState ({
    isLoggedIn: state => state.auth.status.loggedIn,
    loginFailureStatus: state => state.auth.status.loggedError,
    loginStatus: state => state.auth.status.loadingStatus
  }),
  created() {
    if (this.isLoggedIn) {
      this.$router.push('/voting');
    }
  },
  validations: {
    user: {
      email: {
        required, email
      }
    }
  },
  methods: {
    login(){
      this.$v.$touch();
      if (!this.$v.$invalid) {
         this.$store.dispatch('auth/login', this.user)
          .then(() => {
              if (this.isLoggedIn) {
                this.$router.push('/voting');
              } else {
                this.isLoginFailed = true;
                if(this.loginFailureStatus === 401) {
                    this.isLoginFailedData = 'Вы ввели неверный логин или пароль'
                } else if (this.loginFailureStatus === 403) {
                    this.isLoginFailedData = 'Данный пользователь не подтвержден, проверьте почту указанную при регистрации или зарегистрируйтесь еще раз'
                }
              }
          })
      }
    }
    // reloadLogin() {
    //   this.isLoginFailed = false;
    // }
  },
}
</script>

<style scoped>

</style>