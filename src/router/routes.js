import Home from '@/views/Home.vue'
import CreateTag from '@/views/CreateTag.vue'
import Layout from '@/components/core/Layout'

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
  }
]

export default routes
