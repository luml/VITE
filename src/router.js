import { createRouter, createWebHistory } from 'vue-router'
import FirstDay from './components/FirstDay.vue'
import ChildPage from './components/ChildPage.vue'
import User from './components/User.vue'
import NotFound from './components/NotFound.vue'
import UserProfile from './components/UserProfile.vue'
import UserPosts from './components/UserPosts.vue'
import First from './views/First.vue'
import Second from './views/Second.vue'
import Third from './views/Third.vue'
import Login from './views/Login.vue'
import './index.css'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: FirstDay, alias: '/home' },
        { path: '/child', name: 'Child', component: ChildPage },
        {
            path: '/users/:id',
            name: 'users',
            component: User,
            props: true,
            children: [
                {
                    path: 'profile',
                    name: 'profile',
                    component: UserProfile
                },
                {
                    path: 'posts',
                    name: 'posts',
                    component: UserPosts
                }
            ]
        },
        {
            path: '/users/:id/posts/inc',
            name: 'increase',
            components: {
                default: First,
                a: Second,
                b: Third
            }
        },
        {
            path: '/users/:id/posts/dec',
            name: 'decrease',
            components: {
                default: Third,
                a: Second,
                b: First
            }
        },
        { path: '/login', name: 'Login', component: Login },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        { path: '/redir', redirect: '/' }
    ]
})

router.beforeEach((to, from) => { // next is third parameter
    // TODO for cancel the navigation
    console.log('---router method beforeEach---', to, from)
    if (to.name && to.name !== 'Login') {
        // next({ name: 'Login' })
        return true
    } else {
        // next({ name: 'Home' })
        return false
    }
})