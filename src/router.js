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
import './index.css'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
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
        {
            path: '/users/:id/posts/inc',
            components: {
                default: First,
                a: Second,
                b: Third
            }
        },
        {
            path: '/users/:id/posts/dec',
            components: {
                default: Third,
                a: Second,
                b: First
            }
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
        { path: '/redir', redirect: '/' }
    ]
})