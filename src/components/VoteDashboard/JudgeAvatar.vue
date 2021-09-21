<template>
    <div class="participant__image">
         <!-- <img class="image_judge"  :src="`https://voting-app.newtechaudit.ru${participantAvatarPath}`"/> -->
         <img class="image_judge" :src="require(`@/assets/Iov.jpg`)"/>
      </div>
</template>
<script>

export default {
    props: ['participantAvatarPath']
}
</script>
