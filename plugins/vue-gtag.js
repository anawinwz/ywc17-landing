import Vue from 'vue'
import VueGtag from 'vue-gtag'
import { isAccepted } from '../../utils/pdpa'

Vue.use(VueGtag, {
  config: { id: 'UA-42284958-1' },
  bootstrap: isAccepted()
})
