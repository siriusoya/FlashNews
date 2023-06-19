import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

app.use(vue3GoogleLogin, {
  clientId: '81015080677-m1hanq591gdigskblpiorkvvkqmfbmb9.apps.googleusercontent.com'
})

app.use(pinia)
app.use(router)


app.mount('#app')
