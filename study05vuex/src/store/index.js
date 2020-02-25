import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";


//1、使用插件
Vue.use(Vuex)

const state = {
  storeCounter: 100,
  students:[
    {id:111, name:'how', age: 10},
    {id:112, name:'why', age: 20},
    {id:113, name:'what', age: 30},
    {id:114, name:'when', age: 40},
    {id:115, name:'where', age: 50},
  ],
  info:{
    id:117,
    name:'wocao',
    age:60
  }
}

//2、创建对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
  }
})

//3、导出对象
export default store
