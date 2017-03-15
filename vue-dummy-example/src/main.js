import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(require('vue-resource'))
Vue.http.options.root = '/'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'

var router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: App }
  ]
})

new Vue({
  router,
  template: `
  <div id="app">
    <router-view></router-view>
  </div>`
}).$mount('#app')
