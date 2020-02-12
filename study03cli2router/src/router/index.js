import  Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from "../components/About"
// import User from '../components/User'

//路由懒加载(ES6方式，使用箭头函数)
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

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
    component: Home,
    //嵌套路径:/home/news   /home/msg
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        //子路由不需要加斜杠
        path: 'news',
        component: HomeNews
      },
      {
        path: 'msg',
        component: HomeMessage
      }
    ],
    meta:{
      title: '首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta:{
      title: '关于'
    }
  },
  {
    //动态路由
    path: '/user/:userId',
    component: User,
    meta:{
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title: '档案'
    }
  }
]

const router = new VueRouter({
  routes,
  //mode设置修改url的方式，默认是url的hash，这里修改为history
  mode: 'history'
})

//全局导航守卫
//前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  console.log(to);
  next()
})
//后置钩子
router.afterEach((to, from) =>{
  console.log('afterEach');
})


// 3、导出
export default router
