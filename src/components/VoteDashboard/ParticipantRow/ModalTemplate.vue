<template>
    <!-- <modal v-if="showModal" @close="showModal = false"> -->
        <div>
            <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header">
                <slot name="header">
                </slot>
              </div>
              <div class="modal-body">
                <slot name="body">
                </slot>
                <button class="modal-default-button" @click="$emit('close')">
                    OK
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
</template>
<script>

export default{
    
}
</script>