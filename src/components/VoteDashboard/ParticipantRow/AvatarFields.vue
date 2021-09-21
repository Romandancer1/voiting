<template>
    <div class="participant__image">
        <img class="image_participant" :src="`https://voting-app.newtechaudit.ru${participantAvatarPath}`"/>
    </div>
</template>


<script>
export default {
    props: ['participantAvatarPath']
}
</script>
