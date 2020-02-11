import  Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import About from "../components/About"
import User from '../components/User'

// 1、使用插件
Vue.use(VueRouter)


// 2、创建VueRouter对象，配置路由映射
const routes = [
  {
    path: '/',
    //redirect重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    //动态路由
    path: '/user/:userId',
    component: User
  }
]

const router = new VueRouter({
  routes,
  //mode设置修改url的方式，默认是url的hash，这里修改为history
  mode: 'history'
})


// 3、导出
export default router
