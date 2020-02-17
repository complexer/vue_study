<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
<!--    <div :class="{active:isActive}" >-->
<!--    动态样式做法 -->
    <div :style="activeStyle" >
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      //组件间传值
      props:{
        path: String,
        activeColor:{
          type: String,
          default: 'red'
        }
      },
      data(){
        return {
          // isActive: false
        }
      },
      //计算属性
      computed:{
        //判断动态显示颜色
        isActive(){
          //indexOf：存在
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
          return this.isActive ? {color: this.activeColor} : {}
        }
      },
      methods:{
        itemClick(){
          this.$router.replace(this.path)
          this.isActive=true
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    margin-top: 2px;
    vertical-align: 1px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }

  /*.active {*/
  /*  color: #D4237A;*/
  /*}*/
</style>
