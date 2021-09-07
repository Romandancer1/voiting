<template>
    <div class="participant__image">
        <img class="pictures" :src="require(`@/assets/avatar.png`)"/>
    </div>
</template>


<script>
export default {
    props: ['participantAvatarPath']
}
</script>

<style scoped>
.pictures{
    height: 90px;
}
</style>