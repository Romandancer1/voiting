<template>
    <div class="container">
        <ParticipantRow v-for="item in participants"
                        :key="item.id"
                        :rowData="item"
        />
    </div>
</template>

<script>
import ParticipantRow from '@/components/VoteDashboard/ParticipantRow'
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
    flex-direction: row;
    flex-wrap:  wrap; 
    justify-content: space-around;
    width: 100%;
    max-width: 1024px;
    padding: 10px 10px;
    margin: 0 auto;
}

</style>