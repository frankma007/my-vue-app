import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue'; // 确保你有这个视图组件
import About from '../views/About.vue'; // 确保你有这个视图组件
import DataManage from '../views/DataManage.vue'; // 确保你有这个视图组件
import ImitatedData from '../views/ImitatedData.vue'; // 确保你有这个视图组件
import UAV from '../views/components/UAV.vue'; // 确保你有这个视图组件
import UAVFlock from '../views/components/UAVFlock.vue'; // 确保你有这个视图组件
import  BirdFlock from '../views/components/BirdFlock.vue'; // 确保你有这个视图组件

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/dataManage', name: 'DataManage', component: DataManage },
  { path: '/imitatedData', name: 'ImitatedData', component: ImitatedData,
    children: [
      { path: '/imitatedData/UAV', name: 'UAV', component: UAV },
      { path: '/imitatedData/UAVFlock', name: 'UAVFlock', component: UAVFlock },
      { path: '/imitatedData/BirdFlock', name: 'BirdFlock', component: BirdFlock },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 使用 hash 模式
  routes, // 短路径写法，等同于 routes: routes
});

export default router;