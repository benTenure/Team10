import {Doughnut} from 'vue-chartjs'
export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: this.$store.state.doughnutGraph.dataFilterTypes,
      datasets: [
        {
          backgroundColor: [
            'rgba(65, 184, 131, .8)',
            'rgba(228, 102, 81, .8)',
            'rgba(0, 216, 255, .8)',
            'rgba(155, 89, 182, .8)'
          ],
          borderWidth: 0,
          data: this.$store.state.doughnutGraph.amountArray
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
