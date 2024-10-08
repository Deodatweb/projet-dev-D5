import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { createHead } from '@vueuse/head'

library.add(fas, fab)

const head = createHead()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(head)
app.use(router)
app.mount('#app')
