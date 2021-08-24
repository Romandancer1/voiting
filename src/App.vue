<template>
  <div id="app">
    <div>
      <DropListRound/>
    </div>
    <div class="tab" >
      <button class="tab-button" @click="newParticipants=participants1.slice()">Стол 1</button>
      <button class="tab-button" @click="newParticipants=participants2.slice()">Стол 2</button>
      <button class="tab-button" @click="newParticipants=participants3.slice()">Стол 3</button>
      <VotingDashboard :participants="newParticipants"/>
    </div>
  </div>
</template>

<script>
import VotingDashboard from './components/VotingDashboard.vue'
import DropListRound from './components/UI/DropListRound.vue'
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
    VotingDashboard,
    DropListRound
  }, 

  methods: {
    buttonAction:function(){

    }

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
