import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  hash: true,
  history: { type: 'hash' },
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' 短链列表',
      path: '/table',
      component: './Table',
    },
    {
      name: ' Form 示例',
      path: '/form',
      component: './Form',
    },
    {
      name: ' 表单设计器',
      path: '/generator',
      component: './Generator',
    },
  ],
  npmClient: 'pnpm',
  proxy: {
    '/v1': {
      target: 'https://admin.luckmarket.cn/',
      changeOrigin: true,
      pathRewrite: { '^/v1': '/v1' },
    },
  },
});
