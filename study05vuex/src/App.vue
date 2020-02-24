<template>
  <div id="app">
    <h1>-------app-------</h1>
    <h2>{{counter}}</h2>
    <h2>--vuex--</h2>
    <h2>{{$store.state.storeCounter}}</h2>
    <h1>-------hellovuex-------</h1>
    <hello-vuex v-bind:counter="counter"/>

    <h2>--button--</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <h2>--vuex button--</h2>
    <button @click="add">add</button>
    <button @click="sub">sub</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">addStudent</button>

    <h3>{{more20stu}}</h3>
    <h2>------getter------</h2>
    <h3>{{$store.getters.powerCount}}</h3>
    <h3>{{$store.getters.more20stu}}</h3>
    <h3>{{$store.getters.more20stuLength}}</h3>
    <h3>{{$store.getters.moreAgeStu(40)}}</h3>

    <h2>新增监听属性</h2>
    <h3>{{$store.state.info}}</h3>
    <button @click="uploadInfo">修改信息</button>

  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  export default {
    name: 'App',
    data(){
      return{
        counter: 0
      }
    },
    components:{
      HelloVuex
    },
    methods:{
      add(){
        this.$store.commit(INCREMENT)
      },
      sub(){
        this.$store.commit('decrement')
      },
      addCount(count){
        this.$store.commit('incrementCount', count)
      },
      addStudent(){
        const student = {id:116, name:'which', age:60}
        this.$store.commit('incrementStudent', student)
      },
      uploadInfo(){
        // this.$store.commit('updateInfo')
        // this.$store.dispatch('aUpdateInfo', 'testPayLoad')

        // 通过里面返回的promise来链式执行判断异步操作是否执行完成
        this.$store
          .dispatch('aUpdateInfo', "携带信息")
          .then(res => {
            console.log("actions完成了提交");
            console.log(res);
          })
      }
    },
    computed:{
      more20stu(){
        return this.$store.state.students.filter(s => s.age >=30 )
      }
    }
  }
</script>

<style>
</style>
