import Vue from 'vue'
import VueRouter from 'vue-router'
import { constantRoutes } from './router'

Vue.use(VueRouter)

const routes = constantRoutes

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
