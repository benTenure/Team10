import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AmCharts from 'amcharts3'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(AmCharts)
Vue.use(Vuetify)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
