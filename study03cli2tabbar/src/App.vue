<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import MainTabBar from "./components/MainTabBar";
  export default {
    name: 'App',
    components:{
      MainTabBar
    }
  }
</script>
<!--  在style中引用需要使用at符号  -->
<style>
  @import "./assets/css/base.css";
</style>
