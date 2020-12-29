import { createApp } from 'vue'
import { createWebHashHistory, createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue'
import FirstDay from './components/FirstDay.vue'
import ChildPage from './components/ChildPage.vue'
import User from './components/User.vue'
import NotFound from './components/NotFound.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'
import './index.css'


const routes = [
    { path: '/', component: FirstDay, alias: '/home' },
    { path: '/child', component: ChildPage },
    {
        path: '/users/:id',
        name: 'users',
        component: User,
        props: true,
        children: [
            {
                path: 'profile',
                component: UserProfile
            },
            {
                path: 'posts',
                component: UserPosts
            }
        ]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
        path: '/',
        components: {
            default: FirstDay,
            ChildPage,
            User,
        }
    },
    { path: '/redir', redirect: '/' },

]
// const history = createWebHashHistory()
const history = createWebHistory()
const router = createRouter({
    history,
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
