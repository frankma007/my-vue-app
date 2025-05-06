<template>
  <div class="uav">
    <h1>UAV 组件</h1>
    <p>这里是 UAV 组件，用于展示和操作 UAV 数据。</p>
    <div>无人机数据：
      {{ uavs }}
    </div>
  </div>
</template>

<script setup>
// 使用 setup 语法糖，无需显式导出组件选项
import { computed, onMounted } from "vue"
import { useStore } from "vuex"
const store = useStore()
// 映射状态到组件
// const { uavs } = store.statee4



const uavs = computed(() => store.state.uavs.uavs); 

// 组件中使用

console.log(uavs)
onMounted(()=>{
  //加载成功后直接触发了action 变更了 state
  store.dispatch('uavs/fetchUAVs')
})

</script>

<style scoped>
.uav {
  text-align: center;
  margin-top: 50px;
}
</style>