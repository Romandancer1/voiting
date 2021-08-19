
<template>
    <div class = container>
        <ParticipantRow v-for="item in participants" :key="item.id"/>

         <!-- <AvatarField 
            v-bind:participants = "participants"
            v-bind:item = "item"
        /> -->
        <!-- <div class="table">
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
         -->
    </div>
    
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow'
// import AvatarField from  '@/components/AvatarField'
// import ParticipantEvaluationField from  '@/components/ParticipantEvaluationField'
// import ParticipantInfoField from  '@/components/ParticipantInfoField'
export default {
    components: {
        ParticipantRow
    },
    props:['participants'],
}
</script>

<style scoped>

.container {
    display: flex;
    width: 100%;
    max-width: 1024px;
    padding: 15px 15px;
    margin: 0 auto;
    border-style: solid;
    background-color: white;
    border-radius: 30px;
    border-color: white;
    box-shadow: 2px 2px 5px 2px #CCC;
}
.row{
    display:table-row;
    width:auto;
    padding: 0 15px;
    margin: 0 auto;
    margin:-10px;
    

}
.cell{
    background-color: white;
    display:table-cell; 
    width:auto;
    margin: 20px;
    padding: 10px;
margin-right:-10px;
    
}
.table {
    display:table; 
    padding: 0 25px;
    margin: 0 auto;
    } 
.pictures{
    height: 90px;
}
</style>