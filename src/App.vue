<template>
  <div id="app">
    <div>
      <DropListRound/>
    </div>
    <div class="but">
      <!-- <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: returnTab === tab }]"
        v-on:click="returnTab = tab" 
      >
        {{ "Стол "+tab }}
      </button> -->
      <VotingDashboard :participants="participants1"/>
      <!-- <component 
        v-bind:is = "currentTabComponent" 
        v-bind:participants= "returnTabComponent">
      </component> -->
      <!-- {{returnTabComponent}} -->
    </div>
  </div>
</template>

<script>
import VotingDashboard from './components/VotingDashboard.vue'
import DropListRound from './components/DropListRound.vue'
export default {
  name: 'App',

    data(){
    return{
      participants1:[
        {id: 1, name: 'Чехов А.П.', tb: 'ТБ', post: 'Писатель', department: 'Литературы',img: "avatar",  completed: false},
        {id: 2, name: 'ФИО2', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 3, name: 'ФИО3', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 4, name: 'ФИО4', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 5, name: 'ФИО5', tb: 'ТБ5', post: 'Должность5', department: 'Отдел5', img: "avatar",  completed: false}
      ],
       participants2:[
        {id: 1, name: 'Чеdхов А.П.', tb: 'ТБ', post: 'Писатель', department: 'Литературы',img: "avatar",  completed: false},
        {id: 2, name: 'ФИО2', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 3, name: 'ФИО3', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 4, name: 'ФИО4', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 5, name: 'ФИО5', tb: 'ТБ5', post: 'Должность5', department: 'Отдел5', img: "avatar",  completed: false}
      ],
       participants3:[
        {id: 1, name: 'Чеwdхов А.П.', tb: 'ТБ', post: 'Писатель', department: 'Литературы',img: "avatar",  completed: false},
        {id: 2, name: 'ФИО2', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 3, name: 'ФИО3', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 4, name: 'ФИО4', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 5, name: 'ФИО5', tb: 'ТБ5', post: 'Должность5', department: 'Отдел5', img: "avatar",  completed: false}
      ],
      returnTab: '1',
      tabs: ["1", "2", "3"]
    }
  },
  computed: {
          // currentTabComponent: function() {
          //   return "VotingDashboard";
          // },
          
          // returnTabComponent: function() {
          //   return "participants" + this.returnTab;
          // }
        },


  components: {
    VotingDashboard,
    DropListRound
  }, 

  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
button{
  margin: 0 100px 0 100px;
  background-color: #ffffff; 
  border: solid 1px rgb(151, 151, 151);
  border-radius: 10px;
  color: rgb(29, 29, 29);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.tab-button {
        margin: 0 100px 0 100px;
        background-color: #ffffff; 
        border: solid 1px rgb(151, 151, 151);
        border-radius: 10px;
        color: rgb(29, 29, 29);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
      .tab-button:hover {
        background: #e0e0e0;
      }
      .tab-button.active {
        background: #e0e0e0;
      }
      .tab {
        border: 1px solid #ccc;
        padding: 10px;
      }
.but{
  margin-bottom: 20px;
}

</style>
