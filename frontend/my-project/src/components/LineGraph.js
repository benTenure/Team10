import {Line} from 'vue-chartjs'
// Line Chart with the x-value always being the date/time; y-value being:
// number of total crimes, crime by crimecode/weapon used/description/location/etc
// TODO: A Reminder that Location will split into sub values such as postal and neighborhood
export default {
  extends: Line,
  props: ['data','options'],
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')

    this.renderLineChart()
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
        this.renderLineChart()
      },
      deep: true
    }
  },
  methods: {
    renderLineChart () {
      this.renderChart({
        labels: this.chartData.timeframe,
        datasets: [
          {
            label: this.chartData.dataFilter,
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            pointBorderColor: 'black',
            borderWidth: 1,
            backgroundColor: this.gradient,
            data: this.chartData.amountArray
          }
        ]
      }, this.options)
    }
  }
}
