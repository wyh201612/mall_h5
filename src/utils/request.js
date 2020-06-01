import axios from 'axios'
import router from '@/router';
import { Notify } from 'vant';
import store from '@/store'

// 创建axios实例
const service = axios.create({
  timeout: 5000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(
  config => {
    store.commit('user/SET_SHOW_LOADING');
    return config
  },
  error => {
    store.commit('user/SET_HIDE_LOADING');
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Notify({ type: 'danger', message: res.msg || 'Error', duration: 5000, });

      // 503:Token 过期了或者未登录;
      if (res.code === 503) {
          store.dispatch('user/resetToken').then(() => {
            router.push({path:'/login' ,query: {url:location.hostname}});
            location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
      store.commit('user/SET_HIDE_LOADING');
      return
    } else {
      store.commit('user/SET_HIDE_LOADING');
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Notify({ type: 'danger', message: error.message || 'Error', duration: 5000, });
    store.commit('user/SET_HIDE_LOADING');
    return Promise.reject(error)
  }
)

export default service
