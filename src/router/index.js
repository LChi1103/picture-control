import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Cropperjs', name: 'Cropperjs', component: () => import(/* webpackChunkName: "other" */ '../views/Cropperjs.vue') },
  { path: '/Gradejs', name: 'Gradejs', component: () => import(/* webpackChunkName: "other" */ '../views/Gradejs.vue') },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
