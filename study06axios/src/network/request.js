//export default是只能导出一个实例
//export来定义多个可以一起导出

import axios from 'axios'

//最好用这样方案，直接返回一个instance（instance就是一个promise）
export function request(config) {
  const instance = axios.create({
    baseURL: 'https://autumnfish.cn',
    timeout: 5000
  })

  //axios请求拦截器
  instance.interceptors.request.use(config => {
    //1、校验一些不符合要求的数据
    //2、发送网络请求时候，在请求页面展示一个请求图片（转圈圈）
    //2、网络请求需要携带token时候，来携带信息
    console.log(config);
    return config
  },err =>{
    console.log(err);
  })

  //axios响应拦截器
  instance.interceptors.response.use(res => {
    //取消页面转圈圈
    console.log(res);
    return res
  }, err => {
    console.log(err);
  })

  return instance(config)
}


export function requestError1(config) {
  const instance = axios.create({
    baseURL: 'https://lingjian.com',
    timeout: 10000
  })

  //axios请求拦截器
  instance.interceptors.request.use(config => {
    //1、校验一些不符合要求的数据
    //2、发送网络请求时候，在请求页面展示一个请求图片（转圈圈）
    //2、网络请求需要携带token时候，来携带信息
    console.log(config);
    return config
  },err =>{
    console.log(err);
  })

  //axios响应拦截器
  instance.interceptors.response.use(res => {
    console.log(res);
    return res
  }, err => {
    console.log(err);
  })

  return instance(config)
}


export function requestError2(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'https://lingjian.com',
      timeout: 10000
    })

    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
