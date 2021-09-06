<script>
   import { HorizontalBar, mixins } from 'vue-chartjs';
   const { reactiveProp } = mixins
   export default {
     name: 'BarChart',
     extends: HorizontalBar,
     mixins: [reactiveProp],
     props: ['chartData', 'options'],
     mounted () {
       this.renderChart(this.chartData, this.options)
     },
   }
 </script>

<style scoped>
</style>