import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import components from '@/components/UI'
import store from '@/store'

const app = createApp(App).use(router)

components.forEach(component => {
    app.component(component.name, component)
});
app
  .use(router)
  .use(store)
  .mount('#app')
