<template>
        <div class="table">
            <div class="row" v-for="item in participants" :key="item.id">
                <div class="cell">
                    <img class="pictures" :src="require(`../assets/${item.img}.png` )"/>
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
        item:{
            type: Object,
            require:true
        }
    }   
}
</script>

<style scoped>

.pictures{
    height: 70px;
}
.table {
    display:table; 
    background:#f3eff2;
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
