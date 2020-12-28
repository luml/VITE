import { createApp } from 'vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue'
import FirstDay from './components/FirstDay.vue'
import ChildPage from './components/ChildPage.vue'
import User from './components/User.vue'
import NotFound from './components/NotFound.vue'
import './index.css'


const routes = [
    { path: '/', component: FirstDay },
    { path: '/child', component: ChildPage },
    { path: '/users/:id', name: 'users', component: User },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
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
