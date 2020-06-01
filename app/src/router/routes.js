import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '../views/Home.vue'
import CreateTag from '../views/CreateTag'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/create-tag',
        name: 'CreateTag',
        component: CreateTag
      }
    ]
  },
  {
    path: '*',
    name: 'notFound',
    component: NotFoundComponent
  }
]

export default routes
