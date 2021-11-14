import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/Scene',
  name: 'Scene',
  component: () =>
    import('../views/Scene.vue')
},
{
  path: '/Food',
  name: 'Food',
  component: () =>
    import('../views/Food.vue')
},
{
  path: '/Hotel',
  name: 'Hotel',
  component: () =>
    import('../views/Hotel.vue')
},
{
  path: '/Activity',
  name: 'Activity',
  component: () =>
    import('../views/Activity.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
