<template>
<div >
    <div >
        <div><strong>{{item.name}}</strong></div>
        <div>{{item.tb}}</div>
        <div>{{item.post}} </div>
        <div>{{item.department}}</div>
    </div>  
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