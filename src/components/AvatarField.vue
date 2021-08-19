<template>
    <div class="participant__image">
          <!-- <img class="pictures" :src="require(`../assets/${item}.png` )"/>   -->
    </div>    
        <!-- <div class="table">
            <div class="row" v-for="item in participants" :key="item.id">
                <div class="cell">
                    
                </div>
            </div>
        </div> -->
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

.pictures{
    height: 90px;
}
.table {
    display:table; 
    
    } 
    .row{
    display:table-row;
    width:auto;
    padding: 0 15px;
    margin: 0 auto;
}
.cell{
    display:table-cell; 
    width:auto;
    padding: 0 15px;
    margin: 0 auto;
}

</style>
