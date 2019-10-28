import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient3 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient3.addColorStop(0, 'rgba(60,255,50,0.8)')
    this.gradient3.addColorStop(0.5, 'rgba(64,255,99,0.25)')
    this.gradient3.addColorStop(1, 'rgba(30, 131, 255, 0)')

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

    this.gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')

    this.renderChart({
      labels: ['2019-10-03', '2019-10-04', '2019-10-05', '2019-10-06',
        '2019-10-07', '2019-10-08', '2019-10-09', '2019-10-10'],
      datasets: [
        {
          label: 'WESTERN',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          pointBorderColor: 'black',
          borderWidth: 1,
          backgroundColor: this.gradient,
          data: [0, 0, 1, 0, 0, 1, 0]
        }, {
          label: 'NORTHERN',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'black',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [0, 1, 1, 1, 0, 0, 0]
        },
        {
          label: 'NORTHWEST',
          borderColor: '#20ff05',
          pointBackgroundColor: 'white',
          pointBorderColor: 'black',
          borderWidth: 1,
          backgroundColor: this.gradient3,
          data: [0, 0, 1, 1, 2, 0, 0]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
