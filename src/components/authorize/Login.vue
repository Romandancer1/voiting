<template>
  <div class="login">
    <div class="authorization__container">
    <div>
      <h4>Авторизация</h4>
      <form v-on:submit.prevent>
        <div class="authorization__wrapper">
          <label for="userEmail">Выберите пользователя</label>
          <select id="userEmail" v-model.lazy="$v.user.email.$model">
            <option 
              v-for="item in emails" 
              :key="item.id"
              :value="item.email"
              >
              {{item.name}}
            </option>
          </select>

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
    </div>
  </div>
</div>
</template>

<script>
import User from "../../models/user";
import JudgeService from "@/service/judge.service"
import Spinner from 'vue-simple-spinner';
import { mapState } from 'vuex';
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: "Login",
  data() {
    return {
      emails: [],
        // {
        //   id: 1,
        //   name: 'mickeyeasy',
        //   email: 'mickeyeasy@gmail.com'
        // },
        // {
        //   id: 2,
        //   name: 'Федоров П.Ф.',
        //   email: 'fedor@gmail.com'
        // },
        // {
        //   id: 3,
        //   name: 'Иванов П.Ф.',
        //   email: 'ivan@gmail.com'
        // },
      user: new User('', '', '', '', ''),
      isLoginFailed: false,
      isLoginFailedData: null,
      submitStatus: null
    }
  },
  components: {
    Spinner
  },
  beforeCreate() {
        document.body.className = 'login';
  },
  mounted() {
       JudgeService.getFinished().then(response => {
         this.emails = response.judge
       }
     )
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
        required, email,
        getEmail(value){
          return value

        }
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
                this.$store.dispatch('UserData/loadUser')
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
  },
}
</script>

<style scoped>

</style>