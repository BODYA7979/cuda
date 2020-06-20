import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import App from './App.vue'
import './main.scss'

Vue.use(BootstrapVue)
Vue.use(VueLodash, { lodash: lodash })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
