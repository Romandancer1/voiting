<template>
  <div class="statistic-contaner">
    <div class="statistic-contaner--white">
      <ChartView  :chartData="chartData" :options="options"/>
    </div>
  </div>
</template>

<script>
import ChartView from "@/components/dashboard/ChartView";

export default {
  name: "ReestrChart",
  props: ['participantData'],
  components: {
    ChartView
  },
  data () {
    return {
      chartData: null,
      options: null,
    }
  },
  mounted() {
     this.fillData()
  },
  methods: {
    fillData() {
       this.chartData = {
          type: 'horizontalBar',
          labels: this.participantData.names,
            datasets: [
              {
                label: 'Рейтинг участников',
                backgroundColor: '#00d4ff',
                data: this.participantData.scores,
                datalabels: {
                  //   value: {},
                  //       title: {
                  //   color: 'green'
                  // },
                  color: 'red'
                }
              },

            ]
          }
      this.options =  {
        responsive: true,
        type: 'horizontalBar',
        maintainAspectRatio: true,
        aspectRatio: 1,
        indexAxis: 'y',
        legend: {
                display: true,
                position: 'top',
                labels: {
                    fontColor: 'black'
                }
            },
        layout: {
          // padding: {
          //   top: 300
          // }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }

      }
    }
  },
  watch: {
    participantData: function() {
      this.fillData()
    }
  }
}
</script>