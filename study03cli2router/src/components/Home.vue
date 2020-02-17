<template>
    <div>
      <h2>首页</h2>
      <p>首页</p>
      <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/msg">消息</router-link>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
