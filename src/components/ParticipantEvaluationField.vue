<template>
        <div class="table" >
            <div class="row" >
                <div class="cell">
                    Управление результатом/ответственность
                    
                </div>
                <div class="cell">
                Управление собой
                </div>
                <div class="cell">
                Клиентоцентричность
                </div>
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
        selected:{
        }
    }
    
  
}
        
</script>


<style scoped>
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