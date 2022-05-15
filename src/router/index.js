import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue"
import AskFatwa from "@/views/ContactPage.vue"
import FatwaList from "@/views/FatwaList.vue"

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/ask-fatwa',
    name: 'AskFatwa',
    component: AskFatwa
  },
  {
    path: '/fatwas',
    name: 'FatwaList',
    component: FatwaList
  },
  {
    path: '/single-fatwa/',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleFatwa.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
