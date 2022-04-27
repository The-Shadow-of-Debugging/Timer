import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
//import components from '@/components/UI'

const app = createApp(App).use(router)

/*components.forEach(component => {
    app.component(component, component.name)
});*/
app
.use(router)
.mount('#app')
