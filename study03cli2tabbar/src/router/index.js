import Vue from 'vue'
import Router from 'vue-router'

const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Home = () => import('../views/home/Home')
const Me = () => import('../views/me/Me')

Vue.use(Router)

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/me',
    component: Me
  }
]

export default new Router({
  routes,
  mode: 'history'
})
