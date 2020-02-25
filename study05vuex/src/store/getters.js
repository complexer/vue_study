export default {
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
}
