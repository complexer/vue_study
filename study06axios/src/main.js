import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//
// //1、 单个请求
// axios({
//   // https://autumnfish.cn/api/joke?type=ppp&page=1
//   url: 'https://autumnfish.cn/api/joke',
//   method: 'GET',
//   params:{
//     type: 'ppp',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
//

// //2、全局默认配置
// axios.defaults.baseURL='https://autumnfish.cn';
// axios.defaults.timeout=5000
//
// //并发请求
// axios.all([
//   axios({
//     url: '/api/joke'
//   }),
//   axios({
//     url: '/api/joke'
//   })
// ]).then(result => {
//   console.log(result);
// })


//3、创建axios实例，来应对向不同域名请求
// const axiosInstance1 = axios.create({
//   baseURL: 'https://autumnfish.cn',
//   timeout: 5000
// })
//
// const axiosInstance2 = axios.create({
//   baseURL: 'http://api.help.bj.cn/',
//   timeout: 5000
// })
//
// axiosInstance1({
//   url: '/api/joke'
// }).then(res => {
//   console.log(res);
// })
//
//
// axiosInstance2({
//   url: '/apis/weather/',
//   method: 'GET',
//   params:{
//     id: 101060101
//   }
// }).then(res => {
//   console.log(res);
// })


//4、网络请求封装
import {request} from "./network/request";
import {requestError1} from "./network/request";
import {requestError2} from "./network/request";

request({
  url:'/api/joke'
}).then(res => {
  console.log(res);
})


requestError1({
  url: 'test'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
//
//
// requestError2({
//   url: 'test'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })
