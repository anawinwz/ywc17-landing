import Vue from 'vue'
import { isAccepted } from '../../utils/pdpa'
import VueHotjar from './vue-hotjar'

Vue.use(VueHotjar, {
  id: '1470912',
  enabled: isAccepted()
})
