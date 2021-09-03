<template>
    <div class="admin">
        <div class="admin__round" v-for="item in roundData.rounds"
                    :key="item.id"
                    :rowData="item"
        >
          <span>Раунд {{item.id}}</span>
          <button :disabled="item.is_finished"
                  v-on:click="finishRound(item.id)">
                  <span v-if="item.is_finished">Раунд завершен</span>
                  <span v-else>Завершить раунд</span>
          </button>
        </div>
        <button class="admin__download">
            Выгрузить результаты в excel
        </button>

    </div>
</template>

<script>
import AdminSerivce from "@/service/admin.service"

export default {
name: "AdminPage",
  data() {
      return {
          roundData: []
    }
  },
  beforeMount() {
      this.updateRounds()
  },
  methods: {
      finishRound(roundID) {
        AdminSerivce.finishRound(roundID)
            .then(response => {
                console.log(response)
                this.updateRounds()
        })
      },
      updateRounds() {
         AdminSerivce.getAllRounds().then(response => {
            this.roundData = response.data
        })
      }
  }
}
</script>

<style scoped>

</style>