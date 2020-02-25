import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT
} from "./mutations-types";
//下面这种方式导入是错误的，下面是导入起名，只有在被导入文件中是export default才可以重命名
// import INCREMENT from "./mutations-types";

//1、使用插件
Vue.use(Vuex)

//2、创建对象
const store = new Vuex.Store({
  state:{
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
  },
  mutations:{
    // 通过使用这种类型命名方式来避免两边文件出现类型名不一致的错误（避免单词写错情况，导致程序无法调用）
    [INCREMENT](state){
      state.storeCounter++
    },
    decrement(state){
      state.storeCounter--
    },
    incrementCount(state, count){
      state.storeCounter += count
    },
    incrementStudent(state, student){
      state.students.push(student)
    },
    updateInfo(state){
      state.info['name'] = 'lingjian'
      // store中新增属性通过直接复制方式是无法进行响应式的，可以通过Vue.set来添加新属性的响应式
      // state.info['addr'] = 'sichuan'
      // Vue.set(state.info, 'addr', 'sichuan')
      //删除属性
      // Vue.delete(state.info, 'age')
      //mutations中不能出现异步代码,下面代码虽然可以修改页面但是无法被mutations记录下来，是错误代码
      //mutations中只能出现同步操作
      // setTimeout(() => {
      //   state.info['name'] = 'lingjian'
      // }, 1000)
    }
  },
  actions:{
    //上下文
    //异步操作需要在actions中使用
    // aUpdateInfo(context, payload){
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload);
    //   }, 1000)
    // }

    aUpdateInfo(context, payload){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('666')
        }, 1000)
      })
    }
  },
  getters:{
    more20stu(state){
      return state.students.filter(s => s.age >= 30 )
    },
    powerCount(state){
      return state.storeCounter * state.storeCounter
    },
    more20stuLength(state, getters){
      return getters.more20stu.length
    },
    //第二个参数是getters，如果直接传age是无法接受的
    moreAgeStu(state){
      return function (age) {
        return state.students.filter(s => s.age >= age)
      }
    }
  },
  modules:{

  }
})

//3、导出对象
export default store
