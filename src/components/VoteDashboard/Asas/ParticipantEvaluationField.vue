<template>
        <div class="table" >
            <div class="row" >
                <div class="cell" v-for="i in 1" :key="i.id">
                    Управление результатом/ответственность
                    <DropList2/>
                </div>
                <div class="cell" v-for="i in 1" :key="i.id">
                    Управление собой
                     <DropList2 class="dr"/>
                </div>
                <div class="cell" >
                Клиентоцентричность
                <DropList2 class="dr"/>
                </div>
            </div>
        </div>
</template>

<!--import ParticipantEvaluationField from  '@/components/ParticipantEvaluationField'-->
<script>
import DropList2 from '@/components/DropList2'
export default {
    props:{
        participants:{
            type: Object,
            required: true
        }
    },
    data(){
        return{
            options:[
                {name:'Op 1', value: 1},
                {name:'Op 2', value: 2},
                {name:'Op 3', value: 3},
            ],
            selected:''
        }
    },
    components:{
    DropList2
    },
    methods:{
        selectOptions(option){
            this.selected = option.name
        }
    }
    
  
}
       
</script>


<style scoped>
.dr{
    padding: 20px 0 10px 20px;
    position: relative;
    top:13px;
}
select{
    
    border-color:thistle;
    border-radius: 20px;
    outline: none;
    appearance: none ;
    background-color:thistle;
    border: none;
    padding: 0 1em 0 0;
    margin:auto;
    height: 3rem;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
}

    

.select::after {
    color: violet;
  content: "";
  width: 0.8em;
  height: 0.5em;
  background-color: var(--select-arrow);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}
select::-ms-expand {
  display: none;
}

.row{
    display:table-row;
    width:10%;
    
}
.cell{
    display:table-cell; 
    width:340px;
}
.table {display:table; } 
</style>