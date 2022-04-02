import Vue from 'vue'
Vue.config.devtools = true

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueNativeSock from 'vue-native-websocket'
import vClickOutside from 'v-click-outside'

Vue.use(VueNativeSock, 'ws://localhost:3000', {
  store: store,
  format: 'json',
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
})

Vue.use(vClickOutside)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')