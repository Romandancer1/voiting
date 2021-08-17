<template>
  <div id="app">
    <VotingDashboard 
    v-bind:participants = "participants"
    />
    

  </div>
</template>

<script>
import VotingDashboard from './components/VotingDashboard.vue'

export default {
  name: 'App',

    data(){
    return{
      participants:[
        {id: 1, name: 'Чехов А.П.', tb: 'ТБ', post: 'Писатель', department: 'Литературы',img: "avatar",  completed: false},
        {id: 2, name: 'ФИО2', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 3, name: 'ФИО3', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 4, name: 'ФИО4', tb: 'ТБ', post: 'Должность', department: 'Отдел', img: "avatar",  completed: false},
        {id: 5, name: 'ФИО5', tb: 'ТБ5', post: 'Должность5', department: 'Отдел5', img: "avatar",  completed: false}
      ],
      selected:''
    }
  },


  components: {
    VotingDashboard
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
  margin-top: 60px;
}
</style>
