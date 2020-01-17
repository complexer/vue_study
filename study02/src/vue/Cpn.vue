<template>
    <div>
        <h3 class="title">Cpn组件</h3>
        <P class="name">{{name}}</P>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return {
                name: "This is Cpn"
            }
        },
    }
</script>

<style scoped>
    .title {
        color: pink;
    }
    .name {
        background-color: aqua;
    }
</style>