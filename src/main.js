import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store'
import './assets/tailwind.css'
import VueInputMask from '@/plugins/vue-inputmask'

const app = createApp(App)
app
  .use(VueInputMask)
  .use(router)
  .use(store)
  .mount('#app')
