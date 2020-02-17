<template>
  <tab-bar>
    <!--      组件传值 -->
    <tab-bar-item path="/home" activeColor="#D4237A">
<!--      路径别名在html里需要用符号 -->
      <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/home-active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#D4237A">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/category-active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#D4237A">
      <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/cart-active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/me" activeColor="#D4237A">
      <img src="~assets/img/tabbar/me.svg" alt="" slot="item-icon">
      <img src="~assets/img/tabbar/me-active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
    // 这里直接使用路径别名,在webpack.base.conf.js文件resolve选项下设置
    import TabBar from "components/tabbar/TabBar";
    import TabBarItem from "components/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components:{
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
