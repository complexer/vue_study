<template>
  <div id="app">
<!--    tag渲染成其他标签，默认是a标签-->
<!--    默认是使用的url的hash，在index配置使用history，默认是使用push，如果要用replace则在标签中添加replace-->
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <router-link to="/home"  replace>首页</router-link>
    <router-link to="/about"  replace>关于</router-link>

<!--    使用params传参：v-bind-->
    <router-link v-bind:to="'/user/'+userId"  replace>用户</router-link>

<!-- 使用query传参 -->
    <router-link v-bind:to="{path: '/profile', query:{'name': 'ling', 'age': 18, 'why': 'nowhy'}}"  replace>档案</router-link>

    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

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
    },
    userClick(){
      return this.$router.replace('/user/'+ this.userId)
    },
    profileClick(){
      return this.$router.replace({
        path: '/profile',
        query:{
          'name': 'jian',
          'age': 25,
          'why': 'go out'
        }
      })
    }
  }
}
</script>

<style>
  .router-link-active{
    color: red;
  }
</style>
