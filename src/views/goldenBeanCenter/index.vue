<template>
    <div class="goldenBeanCenter dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">我的金豆</span>
                </template>
                <template #right>
                    <router-link :to="{path:'/goldenDetails'}">
                        <span class="text-sm text-darkGray">使用明细</span>
                    </router-link>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier">
            
            <div class="content padding-lr">
                <div class="gold flex flex-direction align-center justify-center">
                    <div class="text-sm text-white">可用金豆(个)</div>
                    <div class="flex flex-row align-center justify-center margin-top-sm">
                        <img src="../../assets/images/goldenCenter/goldenBeans.png" alt="">
                        <span class="text-sxxlm text-white">{{signInfoData.goldBean}}</span>
                    </div>
                </div>
                <div class="GoodGiftCoupons padding-tb bg-white">
                    <div class="padding-lr flex flex-row align-center justify-between">
                        <div class="text-sm text-blackDark">好礼换券</div>
                        <div class="text-xs text-darkGray">
                            <router-link :to="{path: '/goldenExchangeList'}">更多好礼<van-icon name="arrow" class=" vertical-middle" /></router-link>
                        </div>
                    </div>
                    <div class="GiftCoupons-list flex flex-row">
                        <div class="exchangeGoodManners flex flex-row flex-wrap" v-if="giftList.length!=0">
                            <div class="GiftCoupons-item margin-top-sm flex flex-direction align-center justify-center" v-for="(item, index) in giftList" :key="index">
                                <img :src="item.imgUrl" alt="">
                                <div class="couponName text-xs text-darkGray">{{item.giftName}}</div>
                                <div class="goldNum text-xs text-orangeLight">{{item.price}}金豆兑换</div>
                                <div class="btn text-xs bg-orangeLight text-center"><router-link :to="{path: '/exchangeGoodsDetails',query:{giftId:item.giftId,balance:item.balance,giftName:item.giftName,imgUrl:item.imgUrl,introduction:item.introduction,marketPrice:item.marketPrice,price:item.price,remark:item.remark}}">立即兑换</router-link></div>
                            </div>
                        </div>
                        <!-- 无兑换实物奖品 -->
                        <div class="noCoupon" v-else>
                            <img src="../../assets/images/goldenCenter/noCoupon.png" alt="">
                            <div class="margin-top text-gray text-center text-sm">无券可兑，正在筹备中～</div>
                        </div>
                    </div>
                </div>
                <div class="task padding-top margin-bottom bg-white">
                    <div class="padding-lr">
                        <div class="text-sm text-blackDark">做任务领金豆</div>
                    </div>
                    <div class="padding-bottom van-hairline--bottom">
                        <div class="signIn-box flex flex-row justify-between">
                            <div class="flex flex-row">
                                <div>
                                    <img src="../../assets/images/goldenCenter/calendar.png" alt="" class="calendar">
                                </div>
                                <div>
                                    <div class="text-sm text-blackDark" style="margin-bottom: 2px;">每日签到</div>
                                    <div class="text-xs text-darkGray">已连续签到<span class="text-orangeLight">{{signInfoData.continueSign}}</span>天，继续加油哦</div>
                                </div>
                            </div>
                            <div class="signIn text-center text-darkGray text-xs margin-right-sm" v-if='signInfoData.signStatus==0' @click="siginIn()">签到</div>
                            <div class="signedIn text-center text-white text-xs margin-right-sm" v-else>已签到</div>
                        </div>
                        <div class="signIn-bottom">
                            <div class="flex flex-row justify-between">
                                <div style="position: relative;" class="signIn-item" v-for="(item, index) in signInfoData.signDaysList" :key="index">
                                    <div class="line" v-if="index!=6"></div>
                                    <div class="text-center">
                                        <div :class="item.isSignIn?'no-checked active':'no-checked'">
                                            <svg-icon :icon-class="item.isSignIn?'circle2':'circle1'" :class="item.isSignIn?'circle active':'circle'"></svg-icon>
                                            <div :class="item.isSignIn?'jiangli text-df text-bold active':'jiangli text-sm'">+{{item.goldBean}}</div>
                                        </div>
                                    </div>
                                    <div :class="item.isSignIn?'week active':'week'">{{item.day}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tasks">
                        <div class="tasks-item flex flex-row align-center justify-between padding-tb van-hairline--bottom">
                            <div class="tasks-item-left">
                                <div class="flex flex-row">
                                    <img src="../../assets/images/goldenCenter/cart.png" alt="">
                                    <div class="left-box flex flex-direction justify-between">
                                        <div class="text-sm text-blackDark">认证绑卡</div>
                                        <div class="text-xs text-darkGray">成功认证绑卡即可获得30个金豆</div>
                                    </div>
                                </div>
                            </div>
                            <div class="tasks-item-right margin-right-sm">
                                <router-link :to="'/index'"><div class="task-btn text-orangeLight text-xs text-center">去绑卡</div></router-link>
                            </div>
                        </div>
                        <div class="tasks-item flex flex-row align-center justify-between padding-tb van-hairline--bottom">
                            <div class="tasks-item-left">
                                <div class="flex flex-row">
                                    <img src="../../assets/images/goldenCenter/cart.png" alt="">
                                    <div class="left-box flex flex-direction justify-between">
                                        <div class="text-sm text-blackDark">购买黄金</div>
                                        <div class="text-xs text-darkGray">购买黄金奖励20个金豆</div>
                                    </div>
                                </div>
                            </div>
                            <div class="tasks-item-right margin-right-sm">
                                <router-link :to="'/index'"><div class="task-btn text-orangeLight text-xs text-center">去买金</div></router-link>
                            </div>
                        </div>
                        <div class="tasks-item flex flex-row align-center justify-between padding-tb van-hairline--bottom">
                            <div class="tasks-item-left">
                                <div class="flex flex-row">
                                    <img src="../../assets/images/goldenCenter/cart.png" alt="">
                                    <div class="left-box flex flex-direction justify-between">
                                        <div class="text-sm text-blackDark">回租提单</div>
                                        <div class="text-xs text-darkGray">回租提单奖励30个金豆</div>
                                    </div>
                                </div>
                            </div>
                            <div class="tasks-item-right margin-right-sm">
                                <router-link :to="'/index'"><div class="task-btn text-orangeLight text-xs text-center">去回租</div></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'goldenBeanCenter',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                giftList: [],
                signInfoData: {},
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            this.info();
        },
        methods: {
            async info() {
                await this.getGiftList();
                await this.signInfo();
            },
            // 金豆中心好礼换券信息查询
            async getGiftList() {
                this.giftList = await this.$api.getGiftList('',getCookie('accessToken'));
            },
            // 查询最近七天签到信息
            async signInfo() {
                this.signInfoData = await this.$api.getSignInfo('',getCookie('accessToken'));
                let continueSign = this.signInfoData.continueSign; // 连续签到天数
                let continueSignRemainder = this.signInfoData.continueSign % 7; // 连续签到天数取余数
                let signDaysList = this.signInfoData.signDaysList; // 七天的日期
                let signStatus = this.signInfoData.signStatus; // 今日是否签到 0没有； 1签到
                if (continueSign > 0) { // 是否有连续签到
                    signDaysList.map((item, index)=>{
                        if (continueSignRemainder == 0) { // 第一天或者第七天的情况
                            if (signStatus == 0) { // 当天是否签到
                                item['isSignIn'] = false;
                            } else {
                                item['isSignIn'] = true;
                            }
                        } else {
                            if (index < continueSignRemainder) {
                                item['isSignIn'] = true;
                            } else {
                                item['isSignIn'] = false;
                            }
                        }
                    })
                }
            },
            // 签到操作
            async siginIn() {
                await this.$api.getSignApply('',getCookie('accessToken'));
                this.signInfo();
            },
            goBack() {
                this.$router.go(-1)
            },
            toGoldDetail(id) {
                this.$router.push({path:'/goldDetail', query: {id: id}})
            }
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
    .goldenBeanCenter {
        .gold {
            height: 145px;
            background: url('../../assets/images/goldenCenter/personalCenter-bg.png') left top no-repeat;
            background-size: 100% 100%;
            img {
                width: 35px;
                height: 35px;
                margin-right: 7px;
            }
        }
        .GoodGiftCoupons {
            margin: 12px 0;
            border-radius: 2px;
            .GiftCoupons-list {
                .noCoupon {
                    img {
                        width: 100%;
                        margin-bottom: 7px;
                        margin-top: 40px;
                    }
                }
                .GiftCoupons-item {
                    width: 115px;
                    img {
                        width: 66px;
                        height: 66px;
                        margin-bottom: 4px;
                    }
                    .couponName {
                        height: 14px;
                        line-height: 14px;
                        margin-bottom: 1px;
                    }
                    .goldNum {
                        height: 12px;
                        line-height: 12px;
                    }
                    .btn {
                        width: 60px;
                        border-radius: 4px;
                        padding: 1px 0;
                        margin-top: 8px;
                    }
                }
            }
        }
        .task {
            border-radius:2px;
            .signIn-box {
                margin-top: 14px;
                margin-bottom: 14px;
                .calendar {
                    width: 48px;
                    height: 48px;
                    margin: 0 14px 0 10px;
                }
                .signIn {
                    width:45px;
                    height:18px;
                    background:rgba(255,255,255,1);
                    border-radius:9px;
                    border:1px solid rgba(197,197,197,1);
                }
                .signedIn {
                    width:45px;
                    height:18px;
                    background:rgba(197,197,197,1);
                    border-radius:9px;
                    border:1px solid rgba(197,197,197,1);
                }
            }
            .signIn-bottom {
                padding: 0 10px;
                .signIn-item {
                }
                .line {
                    position: absolute;
                    border-color: inherit;
                    background-color: var(--grayLight);
                    width: 65px;
                    height: 1px;
                    top: 19px;
                    left: 0;
                    right: 0;
                }
                .circle {
                    font-size: 24px;
                    background: #fff;
                    color: var(--grayLight);
                    &.active {
                        color: var(--orangeLight);
                    }
                }
                .no-checked {
                    width: 23px;
                    position: relative;
                    z-index: 1;
                    background: #FFFFFF;
                    &.active {
                        &::before {
                            display: block;
                        }
                    }
                    .jiangli {
                        position: absolute;
                        z-index: 1;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        transition: all 0.3s;
                        color: #C0C4CC;
                        width: 100%;
                        text-align: center;
                        &.active {
                            color: var(--orangeLight);
                            top: -4px;
                        }
                    }
                }
                .week {
                    font-size: 10px;
                    line-height: 16px;
                    color: #C0C4CC;
                    &.active {
                        color: var(--orangeLight);
                    }
                }
            }
            .tasks {
                overflow: hidden;
                .tasks-item {
                    img {
                        width: 48px;
                        height: 48px;
                        margin: 0 14px 0 10px;
                    }
                    .left-box {
                        padding: 5px 0;
                    }
                    .task-btn {
                        width: 45px;
                        height: 18px;
                        border-radius: 9px;
                        border:1px solid rgba(255,128,41,1);
                    }
                }
            }
        }
    }
</style>