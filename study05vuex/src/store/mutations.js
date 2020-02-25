import {INCREMENT} from "./mutations-types";
//下面这种方式导入是错误的，下面是导入起名，只有在被导入文件中是export default才可以重命名
// import INCREMENT from "./mutations-types";

export default {
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
}
