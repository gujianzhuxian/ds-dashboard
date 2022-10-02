import { RouteRecordRaw } from 'vue-router';
import { MAIN_LAYOUT } from '@/router/constant';

const performance: RouteRecordRaw = {
  path: '/performance',
  name: 'performance',
  component: MAIN_LAYOUT,
  children: [
    {
      path: 'performance_demonstration',
      name: 'performance_demonstration',
      component: () => import('@/pages/data_general_overview/performance.vue'),
      meta: {
        requireAuth: false,
        locale: '数据源各项性能展示',
      },
    }
  ],
  //meta: { requireAuth: false, locale: '性能数据展示页', icon: 'icon-dashboard' },
};


export default performance;
