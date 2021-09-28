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
                  <h3>"0"</h3>
                  <p>Не соответствует ожиданиям
                    Участник ведёт себя противоположным образом. 
                    Совсем не проявляет или редко проявляет компетенцию.
                  </p>
                  <h3>"1"</h3>
                  <p>
                    Соответствует ожиданиям
                    Участник демонстрирует результаты, отвечающие основным требованиям, 
                    эффективно проявляет компетенцию на большинстве этапов решения кейса.
                  </p>
                  <h3>"3"</h3>
                  <p>
                    Превышает ожидания Участник делает больше, 
                    чем заложено в базовых требованиях, 
                    проявляет компетенцию в любых нестандартных ситуациях 
                    или ситуациях повышенной сложности, задает образец эффективного 
                    поведения для команды.
                  </p>
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