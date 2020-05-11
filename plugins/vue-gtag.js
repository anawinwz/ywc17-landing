import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'UA-42284958-1' },
  bootstrap: localStorage.getItem('PDPA:enabled') === 'true'
})
