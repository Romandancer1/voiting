<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
// import VotingDashboard from './components/VotingDashboard.vue'
// import DropListRound from './components/UI/DropListRound.vue'
// import AvatarField from "./components/UI/AvatarField";
export default {
  name: 'App',
    data(){
    return{
      participants1:[
        {id: 1, name: 'team 1', tb: 'ТБ', post: 'Писатель', department: 'Литературы',img: "avatar",  completed: false, score:0},
        {id: 2, name: 'ФИО2', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 3, name: 'ФИО3', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 4, name: 'ФИО4', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 5, name: 'ФИО5', tb: 'ТБ5', post: 'Должность5', department: 'Отдел5', img: "avatar",  completed: false,score:0}
      ],
       participants2:[
        {id: 1, name: 'team 2', tb: 'ТБ', post: 'Писатель', department: 'Литературы',img: "avatar",  completed: false,score:0},
        {id: 2, name: 'ФИО2', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 3, name: 'ФИО3', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 4, name: 'ФИО4', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 5, name: 'ФИО5', tb: 'ТБ5', post: 'Должность5', department: 'Отдел5', img: "avatar",  completed: false,score:0}
      ],
       participants3:[
        {id: 1, name: 'team 3', tb: 'ТБ', post: 'Писатель', department: 'Литературы',img: "avatar",  completed: false,score:0},
        {id: 2, name: 'ФИО2', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 3, name: 'ФИО3', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 4, name: 'ФИО4', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false,score:0},
        {id: 5, name: 'ФИО5', tb: 'ТБ5', post: 'Должность5', department: 'Отдел5', img: "avatar",  completed: false,score:0}
      ],
      newParticipants:{},
      returnTab: '1',
      tabs: ["1", "2", "3"]
    }
  },
  components: {
    // AvatarField,
    // VotingDashboard,
    // DropListRound
  }, 

  methods: {
    buttonAction:function(){

    }

  }
}
</script>

<style lang="scss">
  @import "styles/style.scss";
</style>

<style>

button{

  /*margin: 0 100px 0 100px;*/
  /*background-color: #ffffff; */
  /*border: solid 1px rgb(151, 151, 151);*/
  /*border-radius: 10px;*/
  /*color: rgb(29, 29, 29);*/
  /*padding: 15px 32px;*/
  /*text-align: center;*/
  /*text-decoration: none;*/
  /*display: inline-block;*/
  /*font-size: 16px;*/
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
.tab-button:active  {
  background: #696969;
  color: white;
  border-color: none;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 20px;
}
.but{
  margin-bottom: 20px;
}

</style>
