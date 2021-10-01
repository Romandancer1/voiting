<template>
    <!-- <modal v-if="showModal" @close="showModal = false"> -->
        <div>
            <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container" style="padding-bottom:10px;">

              <div class="modal-header">
                <slot name="header">
                </slot>
              </div>
              <div class="modal-body">
                <slot name="body">
                  <label><h3>Понравился ли вам сервис? да/нет</h3></label>
                  <p><input name="poll" type="radio" value="true" v-model="is_ok"> Да</p>
                  <p><input name="poll" type="radio" value="false" v-model="is_ok"> Нет</p>
                  <h3>Что можно улучшить?</h3>
                  <input class="template__input" type="text" v-model="fb_text">
                </slot>
                <p v-if="flag" style="color:red; padding-top:20px;"> Вы заполнили не все поля!</p>
                <!-- :disabled="fb_text==''&&is_ok==''" -->
                <button  class="modal-default-button-poll" 
                  
                  
                  @click="$emit('close'),getFeedBackPoll()"
                  >
                  <spinner class="round__finish" v-if="savingDataSpinner"></spinner>
                  <span v-else>Отправить</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
</template>
<script>

import Spinner from 'vue-simple-spinner';
import JudgeSerivce from "@/service/judge.service";
export default{
  props:['email', 'round', 'id', 'participants' ],
    data() {
      return {
          is_ok: '',
          fb_text:'',
          savingDataSpinner: false,
          flag: false,
    }
  },
    methods:{
      getFeedBackPoll( ){
        if (this.fb_text != '' &&  this.is_ok!=''){
          this.savingDataSpinner = true;
          JudgeSerivce.getFeedback(this.email, this.is_ok, this.fb_text).then(
                this.$store.dispatch('VotingData/getParticipants',  {roundID: this.round, judgeID: this.id})
            );
            setTimeout(() => {this.reloadPage()}
          , 2000)
            console.log( JudgeSerivce.getFeedback(this.email, this.is_ok, this.fb_text).then(
                this.$store.dispatch('VotingData/getParticipants',  {roundID: this.round, judgeID: this.id})
            ));
            // setTimeout(this.reloadPage(),5000);
            // this.$router.go();
        } else{
          this.flag=true;

        }
        // if(!this.flsg){
        // this.$router.go()}
          
    },
    reloadPage() {
        this.$router.go()
     },
  },
  components:{
    Spinner
  }
}
</script>