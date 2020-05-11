import Vue from 'vue'
import VueHotjar from './vue-hotjar'
import { isAccepted } from '../../utils/pdpa'

Vue.use(VueHotjar, {
  id: '1470912',
  enabled: isAccepted()
})
