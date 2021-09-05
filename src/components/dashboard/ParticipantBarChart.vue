<template>
     <div class="barchart">
          <div class="barchart__header-filter">
            <bar-chart :participant-data="data"></bar-chart>
          </div>
    </div>
</template>

<script>
import BarChart from "@/components/dashboard/BarChart";
import DashboardService from "@/service/dashboard.service"

export default {
name: "ParticipantBarChart",
  data() {
      return {
         data: [],
      }
  },
  mounted() {
    DashboardService.getDashboardInfo().then(response => {
       this.aggregateData(response.data)
    })

  },
  components: {
      BarChart
  },
  methods: {
      aggregateData(response) {
          let aggregatedData = {names: [], scores: []}
          response.data.forEach(value => {
            aggregatedData.names.push(this.shorthandName(value.name))
            aggregatedData.scores.push(value.score)
          })
          this.data = aggregatedData
      },
      shorthandName(name){
          let list = name.split(' ');
          return list[0] + ' ' + list[1].charAt(0).toUpperCase() + '.' + list[2].charAt(0).toUpperCase() + '.'
      }

  }
}
</script>

<style scoped>

</style>