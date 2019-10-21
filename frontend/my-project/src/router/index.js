import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.green.darken1,
    secondary: colors.red.lighten4,
    accent: colors.indigo.base
  }
})

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
