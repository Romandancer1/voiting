<!--<DropList
                    v-bind:options = "options"
                    @select="selectOptions"
                    v-bind:selected = "selected"
                    /> -->

<template>
    <div class="drop-list">
        <p 
            class="title"
            @click="areOptionsVisible=!areOptionsVisible"> {{selected}}</p>
        <div 
            class="options"
            v-if="areOptionsVisible">
            <p 
                v-for="option in vs" :key="option.value"
                @click="selectOptions(option)">{{option.name}}</p>
        </div>
    </div>

</template>

<script>

export default{
    props:{
        options:{
            type: Array,
            default(){
                return[]
            }
        },
        selected:{
            type: String,
            default:''
        }
    },
    data(){
        return{
             vs:[
                {name:'Op 1', value: 1},
                {name:'Op 2', value: 2},
                {name:'Op 3', value: 3},
            ],
            areOptionsVisible:false
        }
    },
    methods:{
        selectOptions(option){
            this.$emit('select', option)
            this.areOptionsVisible=false
        }
    }
   
}
</script>


<style scoped>
.title{
    border: solid 2px whitesmoke;
    padding: 6px;
    border-radius: 10px;
    
}
.drop-list{
    position: relative;
    width: 200px;
    cursor: pointer;
    
}
.drop-list p{
    margin: 0;
}
.options{
    
    background-color: white;
    top:70px;
    right:0;
    width: 100%;

}
.options p:hover{
    background-color: whitesmoke;
}
</style>