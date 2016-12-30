import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import store from './store/counter/index'
import router from './router/index'

Vue.use(Vuex)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
