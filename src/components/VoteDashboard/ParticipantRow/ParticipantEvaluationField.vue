<template>
        <div  class="container">
            <div class="item">Управление результатом/ответственность<DropListScores/></div>
            <div class="item"> Управление собой<DropListScores /></div>
            <div class="item">Клиентоцентричность<DropListScores /></div>  
            <div class="item">Score<br>{{item.score}}</div>
        </div>
</template>

<script>
import DropListScores from '@/components/DropListScores'
export default {
    props:['item'],
    data(){
        return{
            selected:''
        }
    },
    components:{
        DropListScores
    },
    methods:{
        selectOptions(option){
            this.selected = option.name
        }
    }
  
}
       
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
  
}
.item {
    flex-basis:  auto;
    padding: 5px 0 0 20px;
}
</style>