import Vue from 'vue'
import VueHotjar from './vue-hotjar'

Vue.use(VueHotjar, {
  id: '1470912',
  enabled: localStorage.getItem('PDPA:enabled') === 'true'
})
