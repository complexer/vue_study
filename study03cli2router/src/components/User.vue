<template>
    <div>
      <h2>用户界面</h2>
      <h2>Hello {{userId}}</h2>
    </div>
</template>

<script>
    export default {
        name: "User",
        computed:{
          userId(){
            //获取当前路由的动态参数
            //$route：代表当前路由对象，$router：代表全局路由对象
            return this.$route.params.userId
          }
        }
    }
</script>

<style scoped>

</style>
