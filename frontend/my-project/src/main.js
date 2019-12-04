// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import store from './store/store'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'
import axios from 'axios'

Vue.use(Vuetify)
Vue.use(VueLayers)

Vue.config.productionTip = false

Vue.use({
  install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'http://54.166.56.44'
    })
  }
})

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
//  adding the data for clock picker
})
