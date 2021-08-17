
<template>
    <div class = container>

         <AvatarField 
          v-bind:participants = "participants"
        v-bind:item = "item"
        />
        <div class="table">
            <div class="row"  v-for="item in participants" :key="item.id">
                <div class="cell">
                    <ParticipantInfoField 
                    v-bind:participants = "participants"
                    v-bind:item = "item"
                    />
                </div>
                <div class="cell">
                    <ParticipantEvaluationField 
                    v-bind:participants = "participants" 
                    />
                </div>
               
            </div>
        </div>
        
    </div>
    
</template>

<script>
import AvatarField from  '@/components/AvatarField'
import ParticipantEvaluationField from  '@/components/ParticipantEvaluationField'
import ParticipantInfoField from  '@/components/ParticipantInfoField'
export default {
    components:{
        ParticipantEvaluationField, ParticipantInfoField, AvatarField
    },
    props:['participants'],

}
</script>

<style scoped>

.container {
    background: #f3eff2;
    display: flex;
    width: 100%;
    max-width: 1024px;
    padding: 15px 15px;
    margin: 0 auto;
}
.row{
    
    background: #f3eff2;
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
.table {
    display:table; 
    padding: 0 25px;
    margin: 0 auto;} 
.pictures{
    height: 90px;
}
</style>