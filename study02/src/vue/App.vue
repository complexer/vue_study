<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="button_click">wocao</button>
        <Cpn/>
    </div>
</template>

<script>
    import Cpn from './Cpn.vue'

    export default {
        name: "App",
        components:{
            Cpn
        },
        data(){
            return {
                message: "hello"
            }
        },
        methods:{
            button_click(){
                alert("wocao")
            }
        }
    }
</script>

<style scoped>
    .title {
        color: red;
    }
</style>