import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue"
import AskFatwa from "@/views/ContactPage.vue"
import FatwaList from "@/views/FatwaList.vue"
import DashboardHome from "@/components/dashboard/DashboardHome.vue"
import FatwaQuestions from "@/components/dashboard/FatwaQuestions.vue"
import AnswerFatwa from "@/components/dashboard/AnswerFatwa.vue"

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
    path: '/single-fatwa/:fatwaId',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SingleFatwa.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardHome,
    children : [
      {
        path : '/dashboard/questions',
        name : 'Fatwa Questions',
        component : FatwaQuestions
      },
      {
        path : '/dashboard/answer/:id',
        name : 'Answer Fatwa',
        component : AnswerFatwa
      },
      {
        path : '/dashboard/all-fatwas',
        name : 'All Fatwas',
        component : () => import(/* webpackChunkName: "about" */ '@/components/dashboard/AllFatwas.vue')
      },
      {
        path : '/dashboard/edit-fatwa/:id',
        name : 'Edit Fatwa',
        component : () => import(/* webpackChunkName: "about" */ '@/components/dashboard/EditFatwa.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
