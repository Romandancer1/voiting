<template>
 <div class="authorization__container">
   <div v-if="registerSuccess === 0">
      <h4>Регистрация</h4>
      <form v-on:submit.prevent>
        <div class="authorization__wrapper authorization__wrapper--wide">

          <label for="userName">Фамилия</label>
          <input v-model.trim="$v.user.firstName.$model"
                 class="authorization__input"
                 id="userName"
                 type="text"
                 :class="{ 'authorization--invalid': !$v.user.firstName.minLength}"
          >
          <div v-if="$v.user.firstName.$error">
               <p class="authorization__input--error-message" v-if="!$v.user.firstName.minLength || !$v.user.firstName.required ||
               !$v.user.lastName.regexLetters">Вы не ввели фамилию</p>
          </div>

          <label for="userSurname">Имя и Отчество</label>
          <input v-model.lazy="$v.user.lastName.$model"
                 class="authorization__input"
                 id="userSurname"
                 type="text"
                 :class="{ 'authorization--invalid': !$v.user.lastName.minLength}"
          >
          <div v-if="$v.user.lastName.$error">
              <p class="authorization__input--error-message" v-if="!$v.user.lastName.minLength ||
              !$v.user.lastName.required ||
               !$v.user.lastName.regexLetters">Вы не ввели имя
              </p>
          </div>

          <label for="userEmail">Email</label>
          <input v-model.lazy="$v.user.email.$model"
                 class="authorization__input"
                 id="userEmail"
                 type="text"
                 :class="{ 'authorization--invalid': !$v.user.email.email}"
          >
          <div v-if="$v.user.email.$error">
             <p class="authorization__input--error-message" v-if="!$v.user.email.email || !$v.user.email.required">Введенный вами email неверный</p>
          </div>

          <label for="userPassword">Пароль</label>
          <input v-model.lazy="$v.user.password.$model"
                 class="authorization__input"
                 id="userPassword"
                 type="password"
                :class="{ 'authorization--invalid': !$v.user.password.minLength}">
          <div v-if="$v.user.password.$error">
            <p class="authorization__input--error-message" v-if="!$v.user.password.minLength || !$v.user.password.required">Введенный вами пароль не <br>соответствует минимальной длине</p>
          </div>
        </div>
        <button v-on:click="submitRegisterForm" class="authorization__submit register__submit">Зарегистрироваться</button>
      </form>
      <div  class="authorization__footer authorization__footer--justify-center">
        <span class="authorization__footer-text">У вас уже есть аккаунт?</span>
        <router-link to="/login" class="authorization__footer-link">Войти</router-link>
      </div>
   </div>
   <div v-else-if="registerSuccess === 1" class="authorization__register">
        <p> Вы успешно зарегистрированы </p>
        <p> На почту, указанную при регистрации поступит письмо</p>
        <p> для подтверждения актуальности вашей почты. </p>
        <router-link to="/login" class="authorization__footer-link">Войти</router-link>
   </div>
   <div v-else-if="registerSuccess === 2" style="text-align: center">
        <h4> Возникла ошибка при регистрации </h4>
        <p> Возможно данный пользователь уже зарегистрирован </p>
        <p> Попробуйте войти или сбросить пароль </p>
        <div class="" style="display: flex; justify-content: space-between; margin-top: 10px;">
                    <router-link to="/login">Войти</router-link>

        </div>
   </div>

  </div>
</template>

<script>
import User from "@/models/user";
import { mapState } from 'vuex';
import {email, minLength, required , helpers} from 'vuelidate/lib/validators'
const regexLetters = helpers.regex('alpha', /^([а-яА-ЯЁё\s-]{0,})$/)
export default {
name: "Register",
  data() {
    return {
      registerSuccess: 0,
      user: new User('', '', '', '', '', ''),
    };
  },
  computed: mapState ({
    isLoggedIn: state => state.auth.loggedIn
  }),
  validations: {
    user: {
      email: {
        required,
        email,
      },
      firstName: {
        required,
        regexLetters,
        minLength: minLength(3)
      },
      lastName: {
        required,
        regexLetters,
        minLength: minLength(2)
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    submitRegisterForm(){
      this.$v.user.$touch();
      if (!this.$v.user.$invalid) {
          this.$store.dispatch('auth/register', this.user)
          .then(() => {
              this.registerSuccess = 1
          })
          .catch(() => {
              this.registerSuccess = 2
          })
      }
    }
  }
}
</script>

<style scoped>
</style>