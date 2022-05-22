// import * as Vue from 'vue'
import { createApp } from 'vue'
import App from '~/App'
import fetchPlugin from '~/plugins/fetch'

// Vue.createApp(App).mount("#app")
const app = createApp(App)
app.use(fetchPlugin)
app.mount('#app')