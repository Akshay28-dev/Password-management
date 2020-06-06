import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from '../src/store/store';


import VueRouter from 'vue-router'
import { routes } from './router';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(axios)

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  made: history
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
