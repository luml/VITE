import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'
import FirstDay from './components/FirstDay.vue'
import ChildPage from './components/ChildPage.vue'
import './index.css'

const routes = [
    { path: '/', component: FirstDay },
    { path: '/child', component: ChildPage }
]
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
