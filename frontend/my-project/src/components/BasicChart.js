import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  data () {
    return {
      gradient: null,
      gradient2: null,
      localCrimefame: ['00:00:00', '01:00:00', '02:00:00', '03:00:00', '04:00:00', '05:00:00', '06:00:00', '07:00:00', '08:00:00', '09:00:00', '10:00:00',
        '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00', '21:00:00', '22:00:00',
        '23:00:00']
    }
  },
  mounted () {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

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
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
