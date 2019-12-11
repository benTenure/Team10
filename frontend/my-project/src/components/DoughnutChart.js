import {Doughnut} from 'vue-chartjs'
export default {
  extends: Doughnut,
  props: ['data','options'],
  mounted () {
    this.renderDoughnutChart()
  },
  computed: {
    chartData:  {
      get () {
        return this.data
      }
    }
  },
  watch: {
    data: {
      handler() {
        this.renderDoughnutChart()
      },
      deep: true
    }
  },
  methods: {
    renderDoughnutChart() {
      this.renderChart({
        labels: this.chartData.dataFilterTypes,
        datasets: [
          {
            backgroundColor: [
              'rgba(65, 184, 131, .8)',
              'rgba(228, 102, 81, .8)',
              'rgba(0, 216, 255, .8)',
              'rgba(155, 89, 182, .8)',
              'rgba(5,0,182,0.8)',
              'rgba(182,72,0,0.8)'

            ],
            data: this.chartData.amountArray
          }
        ]
      }, this.options)
    }
  }
}
