<template>
  <div id="app">
<!--    tag渲染成其他标签，默认是a标签-->
<!--    默认是使用的url的hash，在index配置使用history，默认是使用push，如果要用replace则在标签中添加replace-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
<!--    使用数据：v-bind-->
    <router-link v-bind:to="'/user/'+userId" tag="button" replace>用户</router-link>
<!--    <button @click="homeClick">首页</button>-->
<!--    <button @click="aboutClick">关于</button>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'ling'
    }
  },
  methods:{
    homeClick(){
      console.log('homeClick');
      this.$router.replace('/home')
    },
    aboutClick(){
      console.log('aboutClick');
      this.$router.replace('/about');
    }
  }
}
</script>

<style>
  .router-link-active{
    color: red;
  }
</style>
