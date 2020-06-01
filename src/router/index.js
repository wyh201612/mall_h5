import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * 注意：子菜单仅在route children.length>=1时出现
 *
 * hidden: true                   如果设置为true，则项目将不会显示在侧边栏中（默认为false）
 * alwaysShow: true               如果设置为true，将始终显示根菜单
 *                                如果不始终设置Show，则当项具有多个子路由时，
 *                                它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect           如果设置了no redirect，则noredirect将不会在breadcrumb中重定向
 * name:'router-name'             该名称由<keep alive>使用（必须设置！！！！）
 * meta : {
    title: 'title'               在侧边栏和面包屑中显示的名称（推荐集）
    auth: true                   是否需要登陆才能访问
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基页
 * 所有角色可以访问
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    meta: { title: '黄金租售-404',auth: false }
  },
  {
    path: '',
    component: Layout,
    redirect: 'index',
    children: [
      {
        path: 'login',
        component: () => import('@/views/login/index'),
        name: 'login',
        meta: { title: '黄金租售-登陆',auth: false,index:0 }
      },
      {
        path: 'index',
        component: () => import('@/views/goldShop/index'),
        name: 'index',
        meta: { title: '黄金租售-黄金租售',auth: false,index:0 }
      },
      {
        path: 'goldDetail',
        component: () => import('@/views/goldDetail/index'),
        name: 'goldDetail',
        meta: { title: '黄金租售-商品详情',auth: false,index:1 }
      },
      {
        path: 'confirmOrder',
        component: () => import('@/views/confirmOrder/index'),
        name: 'confirmOrder',
        meta: { title: '黄金租售-确定订单',auth: true,index:2 }
      },
      {
        path: 'paymentOrder',
        component: () => import('@/views/paymentOrder/index'),
        name: 'paymentOrder',
        meta: { title: '黄金租售-支付订单',auth: true,index:3 }
      },
      {
        path: 'cashier',
        component: () => import('@/views/cashier/index'),
        name: 'cashier',
        meta: { title: '黄金租售-收银台',auth: true,index:4 }
      },
      
      {
        path: 'goldenBeanCenter',
        component: () => import('@/views/goldenBeanCenter/index'),
        name: 'goldenBeanCenter',
        meta: { title: '黄金租售-金豆中心',auth: true,index:1 }
      },
      {
        path: 'goldenDetails',
        component: () => import('@/views/goldenDetails/index'),
        name: 'goldenDetails',
        meta: { title: '黄金租售-金豆使用明细',auth: true,index:2 }
      },
      {
        path: 'goldenExchangeList',
        component: () => import('@/views/goldenExchange/index'),
        name: 'goldenExchangeList',
        meta: { title: '黄金租售-金豆兑换列表',auth: true,index:2 }
      },
      {
        path: 'exchangeDetails',
        component: () => import('@/views/exchangeDetails/index'),
        name: 'exchangeDetails',
        meta: { title: '黄金租售-兑换明细',auth: true,index:3 }
      },
      {
        path: 'exchangeGoodsDetails',
        component: () => import('@/views/exchangeGoodsDetails/index'),
        name: 'exchangeGoodsDetails',
        meta: { title: '黄金租售-兑换商品详情',auth: true,index:4 }
      },
      {
        path: 'exchangeSuccess',
        component: () => import('@/views/exchangeSuccess/index'),
        name: 'exchangeSuccess',
        meta: { title: '黄金租售-兑换成功',auth: true,index:5 }
      },
      {
        path: 'exchangeInDetails',
        component: () => import('@/views/exchangeInDetails/index'),
        name: 'exchangeInDetails',
        meta: { title: '黄金租售-兑换明细详情',auth: true,index:5 }
      },
      
      {
        path: 'couponCenter',
        component: () => import('@/views/couponCenter/index'),
        name: 'couponCenter',
        meta: { title: '黄金租售-优惠券中心',auth: true,index:1 }
      },

      {
        path: 'myGold',
        component: () => import('@/views/myGold/index'),
        name: 'myGold',
        meta: { title: '黄金租售-我的黄金',auth: true,index:1 }
      },
      {
        path: 'orderDetails',
        component: () => import('@/views/orderDetails/index'),
        name: 'orderDetails',
        meta: { title: '黄金租售-订单详情',auth: true,index:2 }
      },
      {
        path: 'effectiveBill',
        component: () => import('@/views/effectiveBill/index'),
        name: 'effectiveBill',
        meta: { title: '黄金租售-生效提单',auth: true,index:2 }
      },
      {
        path: 'effectiveBillDetails',
        component: () => import('@/views/effectiveBillDetails/index'),
        name: 'effectiveBillDetails',
        meta: { title: '黄金租售-提单详情',auth: true,index:3 }
      },
      {
        path: 'effectiveBillSell',
        component: () => import('@/views/effectiveBillSell/index'),
        name: 'effectiveBillSell',
        meta: { title: '黄金租售-出售提单',auth: true,index:4 }
      },
      {
        path: 'effectiveBillWithdrawal',
        component: () => import('@/views/effectiveBillWithdrawal/index'),
        name: 'effectiveBillWithdrawal',
        meta: { title: '黄金租售-提金提单',auth: true,index:4 }
      },
      {
        path: 'effectiveBillLeaseback',
        component: () => import('@/views/effectiveBillLeaseback/index'),
        name: 'effectiveBillLeaseback',
        meta: { title: '黄金租售-回租提单',auth: true,index:4 }
      },
      {
        path: 'effectiveBillFootprint',
        component: () => import('@/views/effectiveBillFootprint/index'),
        name: 'effectiveBillFootprint',
        meta: { title: '黄金租售-提单足迹',auth: true,index:4 }
      },
      

      {
        path: 'transactionPassword',
        component: () => import('@/views/transactionPassword/index'),
        name: 'transactionPassword',
        meta: { title: '黄金租售-交易密码',auth: true,index:1 }
      },

      {
        path: 'bandCard',
        component: () => import('@/views/bandCard/index'),
        name: 'bandCard',
        meta: { title: '黄金租售-绑定银行卡',auth: true,index:1 }
      },
      
      {
        path: 'addressList',
        component: () => import('@/views/addressList/index'),
        name: 'addressList',
        meta: { title: '黄金租售-收货地址',auth: true,index:1 }
      },
      {
        path: 'addAddress',
        component: () => import('@/views/addAddress/index'),
        name: 'addAddress',
        meta: { title: '黄金租售-添加收货地址',auth: true,index:2 }
      },

      {
        path: 'helpCenter',
        component: () => import('@/views/helpCenter/index'),
        name: 'helpCenter',
        meta: { title: '黄金租售-帮助中心',auth: true,index:1 }
      },
      
      { 
        path: '*',
        redirect: '/index'
      }
    ]
  },
]


const createRouter = () => new Router({
  mode: 'history', // require service support
  routes: constantRoutes
})

const router = createRouter()

export default router
