import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ExploreView from '@/views/ExploreView.vue'
import StoryView from '@/views/StoryView.vue'
import UserView from '@/views/UserView.vue'
import TagView from '@/views/TagView.vue'
import FourOhFour from '@/components/FourOhFour.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView
    },
    {
      path: '/story',
      redirect: '/explore',
    },
    {
      path: '/story/:id',
      name: 'story',
      component: StoryView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user',
      redirect: '/explore'
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView
    },
    {
      path: '/tag/:id',
      name: 'tag',
      component: TagView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: FourOhFour
    }
  ]
})

export default router
