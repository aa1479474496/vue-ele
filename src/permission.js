import router from './router'
import store from './store'


localStorage.setItem('token', 'Admin');


router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) { // 假设获取token

    if (!localStorage.getItem('roles')) { // 未获取权限
      store.dispatch('generateRoutes').then(() => {
        // router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        // console.log(store.getters.routers);
      })
    }
    // console.log('已登录');
  }
  else {
    console.log('未');
  }
  next();
})