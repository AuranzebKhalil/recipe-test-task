import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './Store/index'

import 'vuetify/dist/vuetify.min.css'




createApp(App).use(vuetify).use(store).use(router).mount('#app')



