<template>
    <div>
      <h2>我是档案</h2>
      <p>{{$route.query}}</p>
      <p>{{$route.query.name}}</p>
      <p>{{$route.query.age}}</p>
      <p>{{$route.query.why}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
