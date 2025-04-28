<template>
  <div class="imitated-data">
    <h1>模拟数据</h1>
    <p>这里是模拟数据页面，用于展示和操作模拟数据。</p>
    <!-- 在这里把它的子路由列出来并带链接：   -->
    <router-link to="/imitatedData/UAV">无人机</router-link>|
    <router-link to="/imitatedData/UAVFlock">无人机群</router-link>|
    <router-link to="/imitatedData/BirdFlock">鸟群</router-link>|
    <router-view></router-view>
  </div>
</template>

<script setup>
// 使用 setup 语法糖，无需显式导出组件选项
</script>

<style scoped>
.imitated-data {
  text-align: center;
  margin-top: 50px;
}
</style>