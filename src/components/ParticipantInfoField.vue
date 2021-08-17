<template>
<div class="table">
    <div class="items" >
            <div class="row"><strong>{{item.name}}</strong></div>
            <div class="row" >{{item.tb}}</div>
            <div class="row" >{{item.post}} </div>
            <div class="row">{{item.department}}</div>
        
    </div>  
    </div>  
</template>

<script>
export default {
    
    props:{
        participants:{
            type: Object,
            required: true
        },
        item:{
            type: Object,
            require:true
        }
    }
    
}
</script>

<style scoped>
.items{
    width: 100%;
    height: 6rem;
}

.row{
    display:table-row;
    width:auto;
    height:50%;
    border-style: solid;
}

.table {
    display:table;
     } 



</style>