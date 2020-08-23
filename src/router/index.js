import Vue from 'vue'
import VueRouter from 'vue-router'
import User from '../views/User.vue'


Vue.use(VueRouter)

  const routes = [
     {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../views/Comments.vue')
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/Albums.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/Todos.vue')
    },
    {
      path: '*',
      redirect: '/'
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
