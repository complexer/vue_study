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
            return this.$route.params.userId
          }
        }
    }
</script>

<style scoped>

</style>
