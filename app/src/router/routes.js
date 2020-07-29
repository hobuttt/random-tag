import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/views/Home.vue'
import CreateTag from '@/views/CreateTag'
import ClansInfo from '@/views/clans/ClansInfo'
import Clans from '@/views/clans/Clans'
import ClanDetail from '@/views/clans/ClanDetail'
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
        path: 'clans',
        redirect: 'clans/info',
        component: Clans,
        children: [
          {
            path: 'info',
            name: 'Clans',
            component: ClansInfo
          },
          {
            path: 'create-tag',
            name: 'CreateTag',
            component: CreateTag
          }
        ]
      },
      {
        path: 'clans/info/:id',
        props: true,
        name: 'ClanDetail',
        component: ClanDetail
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
