<template>
    <div class="voting__row-participant-info">

        <p><strong>{{item.name}}</strong></p>
        <p>{{item.tb}}</p>
        <p>{{item.post}} </p>
        <p>{{item.department}}</p>

    </div>  
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            require:true
        }
    }
}
</script>

<style scoped>

</style>