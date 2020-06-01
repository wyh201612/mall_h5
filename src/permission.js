import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getCookie } from '@/utils/auth'
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  // 开始进度条
  NProgress.start();
  // 设置页面标题
  document.title = to.meta.title;
  // 确定用户是否已登录
  const hasToken = getCookie('accessToken')
  // next();
  if(!to.meta.auth) {
    console.log('不需登录');
    next();
  } else {
    console.log('需登录');
    if (hasToken) { // 判断是否有token
      console.log('有token');
      if (to.path === '/login') {
        // 如果已登录，请重定向到主页
        next({ path: '/goldShop' });
        NProgress.done();
      } else {
        next();
        NProgress.done();
      }
    } else {
      console.log('无token');
      next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
      NProgress.done();
    }
  }
})

router.afterEach(() => {
  NProgress.done();
})
