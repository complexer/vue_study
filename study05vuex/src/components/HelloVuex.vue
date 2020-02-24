<template>
    <div>
      <h2>{{counter}}</h2>
      <h2>--vuex--</h2>
      <h2>{{$store.state.storeCounter}}</h2>
    </div>
</template>

<script>
    export default {
      name: "HelloVuex",
      props:{
        counter: Number,
      }
    }
</script>

<style scoped>

</style>
