<template>
    <div class="participant__image">
        <img class="pictures" :src="`https://voting-app.newtechaudit.ru${participantAvatarPath}`"/>
        <!-- /uploads/ + participantAvatarPath -->
        <!-- Storage::url($profile->avatar)
        $profile->avatar = url($profile->avatar); -->
    </div>
</template>


<script>
export default {
    props: ['participantAvatarPath']
}
</script>

<style scoped>
.pictures{
    height: 100px;
    width: auto;
    border-radius: 100px;
    margin-right: 10px;
}
</style>