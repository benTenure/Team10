export const reactiveProp = {
  props: {
    chartData: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  watch: {
    'chartData': dataHandler
  }
}
