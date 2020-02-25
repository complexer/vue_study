export default {
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
}
