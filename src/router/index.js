import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/components/layout/Layout'

export const constantRouterMap = [
  { path: '/test1', component: () => import('@/components/test/test1.vue'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/components/dashboard/dashboard.vue'),
      name: 'dashboard',
      meta: {
        title: 'dashboard',
        icon: 'el-icon-sort'
      }
    }]
  },
  {
    path: '/home',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: '',
      component: () => import('@/components/home/Home.vue'),
      name: 'home',
      meta: { title: 'home', icon: 'el-icon-message' }
    }]
  },
  {
    path: '/form',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: '',
      component: () => import('@/components/form/form.vue'),
      name: 'form',
      meta: { title: 'form', icon: 'el-icon-message' }
    }]
  },
  {
    path: '/table',
    name: 'table',
    redirect: 'noredirect',
    component: Layout,
    meta: {
      title: 'table',
      icon: 'el-icon-document'
    },
    children: [
      { path: 'table1', name: 'table1', meta: { title: 'table1' }, component: () => import('@/components/table/table1.vue') },
      { path: 'table2', name: 'table2', meta: { title: 'table2' }, component: () => import('@/components/table/table2.vue') },
      { path: 'table3', name: 'table3', meta: { title: 'table3' }, component: () => import('@/components/table/table3.vue') },
    ]
  },
  {
    path: '*',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/components/404.vue'),
    }], 
    hidden: true
  },
]



export const asyncRouterMap = [
  {
    path: '/home',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'index',
      component: () => import('@/components/home/Home.vue'),
      name: 'home',
      meta: { title: 'home', icon: 'el-icon-message' }
    }]
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/components/table/table.vue'),
    meta: {
      title: 'table',
      icon: 'el-icon-document'
    },
    children: [
      { path: 'table1', name: 'table1', component: () => import('@/components/table/table1.vue') },
      { path: 'table2', name: 'table2', component: () => import('@/components/table/table2.vue') },
      { path: 'table3', name: 'table3', component: () => import('@/components/table/table3.vue') },
    ]
  },
  { path: '*', component: () => import('@/components/404.vue'), hidden: true },
]



export default new Router({
  mode: 'history',
  routes: constantRouterMap
})
