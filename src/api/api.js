import request from './http'
import {domain} from '@/host_url.js'

export default class Api {
    /**
     * 获取各个部位的banner
     * channel  PC;PC,APP,GZH,XCX
     * position  移动端(优惠券banner)：coupon-top；移动端(商品列表页顶部banner)：goods-top；移动端(首页中部banner)：m-index-middle；移动端(首页主banner)：m-index-top；
     * 接口地址:  account/banner/getBannersByChannel
     */
    static getBannersByChannel(data,position) {
        return request({
            url: domain.Base_URL+'/account/banner/getBannersByChannel?channel=APP&position='+position,
            method: 'get',
            params: data
        })
    }
    /** 服务名：累计已为用户管理黄金
    服务地址：mall/setting/publicity/query
    请求方式：post
     */
    static publicityQuery(data) {
        return request({
            url: domain.Base_URL+'/mall/setting/publicity/query',
            method: 'get',
            params: data,
        })
    }
    
    /**
     * 接口用途：   业务介绍
     * method： GET
     * 接口地址：    mall/setting/investArea/query
     */
    static getInvestArea(data) {
        return request({
            url: domain.Base_URL+'/mall/setting/investArea/query',
            method: 'get',
            params: data,
        })
    }

    /**
     * 接口名称: 投资动态列表（3.5.0）
     * 接口地址:  pay/tbill/findInvestList
     */
    static findInvestList(data) {
        return request({
            url: domain.Base_URL+'/pay/tbill/findInvestList',
            method: 'get',
            params: data,
        })
    }

    /**
    * 查询黄金投资-产品展示区产品列表（APP-3.5.0）
    * 接口地址:  product/api/queryInvestProduct
    */
    static queryInvestProduct(data) {
        return request({
            url: domain.Base_URL+'/product/api/queryInvestProduct',
            method: 'get',
            params: data,
        })
    }

    /**
    * 产品详情
    * 接口地址:  product/api/queryProductById/id
    */
    static productDetail(data,id) {
        return request({
            url: domain.Base_URL+'/product/api/queryProductById/'+id,
            method: 'get',
            params: data,
        })
    }
    /**
    * 实时金价 
    * 接口地址:  product/price/currentGoldPrice
    */
    static currentGoldPrice(data) {
        return request({
            url: domain.Base_URL+'/product/price/currentGoldPrice',
            method: 'get',
            params: data,
        })
    }
    /**
    * 黄金持有量
    * 接口地址:  pay/tbill/center
    */
    static getTbillCenter(data,accessToken) {
        return request({
            url: domain.Base_URL+'/pay/tbill/center',
            method: 'get',
            params: data,
            headers: {
                accessToken: accessToken
            }
        })
    }
    
    /**
    * 优惠券可否使用 
    * 接口地址:  activity/coupon/member/num
    */
    static activityCouponNum(data, accessToken) {
        return request({
            url: domain.Base_URL+'/activity/coupon/member/num',
            method: 'get',
            params: data,
            headers: {
                accessToken: accessToken
            }
        })
    }
    
    /**
    * 产品购买记录
    * 接口地址:  pay/tbill/records
    */
    static payRecords(data) {
        return request({
            url: domain.Base_URL+'/pay/tbill/records',
            method: 'get',
            params: data,
        })
    }
    /**
     * 签到信息
     * 接口地址: sign/query/sign/info
     * 请求方法: GET
     * 
     * 返回字段
     * goldBean : 我的金豆数量
     * totalSign : 累计签到天数
     * signStatus : 今日签到状态0未签到 1已签到
     * signDaysList : [{"day":"2019-03-25","goldBean":10,"type":0}]
     * continueSign 连续签到天数
     */
    static getSignInfo(data,accessToken) {
        return request({
            url: domain.Base_URL+'/activity/sign/query/sign/info',
            method: 'get',
            params: data,
            headers: {
                accessToken: accessToken
            }
        })
    }
    /**
     * 用户签到
     * 接口地址:  sign/apply
     * 请求方法: POST
     * 
     * 返回字段
     * continueSign 连续签到天数
     * goldBean 获得金豆数量
     * amount（连续签到7天，并且有神秘大奖）金额 体验金额度(g) 金豆个数 现金金额（元） 福利券（优惠额度mg）
     * type（连续签到7天，并且有神秘大奖）1.体验金、2.金豆、3.黄金红包(mg)、4.回租福利券(mg)、5.商城满减券(mg)、6.现金奖励
     */
    static getSignApply(data,accessToken) {
        return request({
            url: domain.Base_URL+'/activity/sign/apply',
            method: 'post',
            data: data,
            headers: {
                accessToken: accessToken
            }
        })
    }
    /** 服务名：金豆中心好礼换券信息查询
    * 服务地址：activity/gift/recommend/list
    * 请求方式：get
    * 入参：无
    */
    static getGiftList(data,accessToken) {
        return request({
            url: domain.Base_URL+'/activity/gift/recommend/list',
            method: 'get',
            params: data,
            headers: {
                accessToken: accessToken
            }
        })
    }
    /**
    * 获取用户金豆信息
    * memberId String Y 会员ID
    * mobile String Y 手机号
    * name String Y 姓名
    * outgoBean Integer Y 支出金豆
    * usableBean Integer Y 可用金豆
    * incomeBean Integer Y 收入金豆总数
    * outgoGram double Y 支出金豆预计获得黄金克最
    * incomeGram double Y 收入金豆预计获得黄金克重
    * addTime String Y 账户创建时间
    */
    static getUserGoldenBeans(data,accessToken) {
        return request({
            url: domain.Base_URL+'/pay/bean/member/statistics',
            method: 'get',
            params: data,
            headers: {
                accessToken: accessToken
            }
        })
    }
    /**
     * 个人中心优惠券列表
     * method： GET
     * 接口地址：  activity/coupon/member/list
     * type int 是  类型：0-黄金红包；1-回租福利券；2-商城满减券
     */
    /**
     * 返回字段意义
     * usedCoupons：已使用优惠券列表
     * usablenessCoupons：未使用优惠券列表
     * outdatedCoupons：过期优惠券列表
     */
    static getActivityCouponMemberList(data,accessToken) {
        return request({
            url: domain.Base_URL+'/activity/coupon/member/list',
            method: 'get',
            params: data,
            headers: {
                accessToken: accessToken
            }
        })
    }
}