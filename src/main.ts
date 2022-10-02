import { createApp } from 'vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';


// import ECharts from 'vue-echarts';
// import { use } from "echarts/core"; 
// // 手动引入 ECharts 各模块来减小打包体积 
// import { CanvasRenderer } from 'echarts/renderers';
// import { BarChart } from 'echarts/charts';
// import { GridComponent, TooltipComponent } from 'echarts/components';



import App from './App.vue';
import bootstrapRouter from './router';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';

import './style/global.less';


//use([ CanvasRenderer, BarChart, GridComponent, TooltipComponent ]); 

const bootsrap = () => {
  // 全局注册组件（也可以使用局部注册)
  const app = createApp(App);

  app.use(ArcoVueIcon);
  app.use(ArcoVue);
  // //app.use([CanvasRenderer, BarChart, GridComponent, TooltipComponent]);

  // app.component('v-chart', ECharts);

  bootstrapRouter(app);

  app.mount('#app');
};

bootsrap();




