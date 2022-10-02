import { RouteRecordRaw } from 'vue-router';
import { MAIN_LAYOUT } from '@/router/constant';

const data_general_overview: RouteRecordRaw = {
  path: '/data_general_overview',
  name: 'data_general_overview',
  component: MAIN_LAYOUT,
  children: [
    {
      path: 'data_overview',
      name: 'data_overview',
      component: () => import('@/pages/data_general_overview/general_overview.vue'),
      meta: {
        requireAuth: true,
        locale: '数据源总体概要',
      },
    },
    {
      path: 'relational_data',
      name: 'relational_data',
      component: () => import('@/pages/data_general_overview/relational_data.vue'),
      meta: {
        requireAuth: true,
        locale: '关系型数据库展示',
      },
    },
    {
      path: 'non_relational_data',
      name: 'non_relational_data',
      component: () => import('@/pages/data_general_overview/non_relational_data.vue'),
      meta: {
        requireAuth: true,
        locale: '非关系型数据库展示',
      },
    },
  ],
  meta: { requireAuth: true, locale: '性能数据展示页', icon: 'icon-dashboard' },
};

export default data_general_overview;


