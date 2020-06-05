<template>
    <div class="paymentOrder dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">支付订单</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier margin-bottom48">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" head-height='50'>
                    <template #loading>
                        <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                    </template>
                    <div class="content margin-lr">
                        <div class="content-top flex flex-direction text-lg margin-bottom-sm bg-white padding-left-sm padding-right-lg">
                            <div class="state-box">
                                <span class="text-blackDark text-xlx margin-right-lg text-bold">等待支付</span>
                                <span class="text-darkGray text-xs"><img src="../../assets/images/lock.png" alt=""> 购买金价已锁定</span>
                            </div>
                            <div class="time-box flex flex-row justify-between">
                                <div>
                                    <span class="text-blackDark text-sm">锁定剩余时间</span>
                                    <span class="text-blue text-sm"><van-count-down @finish="finishTime" class="text-blue text-sm" style="display: inline-block;" :time="180000" :auto-start="true" format="mm:ss"></van-count-down></span>
                                </div>
                                <div class="bg-blue text-df text-center toPayBtn" @click="buyNow()">去支付</div>
                            </div>
                        </div>
                        <div class="bg-white item">
                            <p class="text-sm text-darkGray padding-lr-sm padding-top-sm">订单基本信息<span></span></p>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">购买金价</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-blue">380.44元/克</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">商品名称</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">测试</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">商品克重</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">20克</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">商品数量</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">1件</span>
                                </template>
                            </van-cell>
                        </div>
                        <div class="bg-white item">
                            <p class="text-sm text-darkGray padding-lr-sm padding-top-sm">订单支付信息<span></span></p>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">支付克重</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">38克</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">商品费用</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">380.44元</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">支付费用</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">380.44元</span>
                                </template>
                            </van-cell>
                        </div>
                        <div class="bg-white item">
                            <p class="text-sm text-darkGray padding-lr-sm padding-top-sm">订单回租信息<span></span><i class="text-orangeDark fr">回租奖励90.22元</i></p>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">回租期限</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">60天</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">回租开始时间</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">1999/07/28 19:05:00</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">回租到期时间</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-darkGray">1999/07/28 19:05:00</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">回租金生金奖励</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-orangeDark">380.44元</span>
                                </template>
                            </van-cell>
                            <van-cell>
                                <template #title>
                                    <span class="text-blackDark text-sm">黄金红包奖励</span>
                                </template>
                                <template #default>
                                    <span class="custom-title text-sm text-orangeDark">380.44元</span>
                                </template>
                            </van-cell>
                            <p class="text-sm text-darkGray padding-sm">注：回租奖励金额将在您提单到期后的24小时内发放到APP账户内</p>
                        </div>
                        <div class="padding-sm flex flex-row align-start margin-tb bg-white">
                            <van-checkbox v-model="checkedServiceAgreement" checked-color="#3987EC" class="serviceAgreement margin-right-xs" icon-size="16px" style="margin-top: 2px;"></van-checkbox>
                            <div class="text-darkGray">
                                <div class="text-sm" :class="checkedServiceAgreement?'':'text-gray'">
                                    我已阅读并同意<span class="text-blue" :class="checkedServiceAgreement?'':'text-gray'">《服务协议》</span>
                                </div>
                                <div class="text-sm">并同意授权E签宝提供具有法律效力的电子签名与存证服务</div>
                            </div>
                        </div>
                    </div>
                </van-pull-refresh>
            </div>
        </div>
        <div class="buy-box bg-white">
            <div class="buy-centent padding-lr">
                <div class="flex flex-row align-center justify-between">
                    <div class="flex flex-row align-center">
                        <div class="text-price text-blue text-xxl">
                            <countTo ref="countTo2" :startVal='0' :endVal='1000' :duration='4000' :decimals='2'></countTo>
                        </div>
                        <div class="text-sm text-orangeDark margin-left-sm">奖励 ¥380.44</div>
                    </div>
                    <div class="buyBtn bg-blue text-df text-center" @click="buyNow()">立即购买</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'paymentOrder',
        components: {
            countTo
        },
        props:{
            
        },
        data() {
            return {
                isBackground: false,
                isLoading: false,
                checkedServiceAgreement: false,
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            this.info();
            window.addEventListener('scroll', this.scrollHander);
        },
        methods: {
            //滚动事件
            scrollHander() {
                // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.isBackground = scrollTop > 20 ? true : false;
            },
            async info() {
                this.isLoading = true;
                // await this.queryInvestProduct();
                this.isLoading = false;
            },
            async onRefresh() {
                await this.info();
            },
            finishTime() {
                this.$notify({ type: 'danger', message: '订单超时' });
            },
            // 立即购买
            buyNow() {
                if(!this.checkedServiceAgreement) {
                    this.$notify({ type: 'danger', message: '请同意协议' });
                    return
                }
                this.$router.replace({path: '/cashier'})
            },
            goBack() {
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .paymentOrder {
        .van-cell__title {
            font-size: 16px;
        }
        .van-cell {
            padding: 10px 10px;
        }
        .van-collapse-item__content {
            padding: 10px 0;
        }
        .van-cell:not(:last-child)::after {
            left: 0;
        }
    }
</style>
<style lang="scss" scoped>
    .paymentOrder {
        .margin-bottom48 {
            margin-bottom: 48px;
        }
        .serviceAgreement {
            font-size: 12px;
        }
        .content-top {
            height: 115px;
            border-radius: 4px;
            .state-box {
                height:28px;
                line-height:28px;
                margin-top: 28px;
                margin-bottom: 11px;
                img {
                    width: 8px;
                    height: 8px;
                    margin-right: 2px;
                }
            }
            .time-box {
                height:24px;
                line-height:24px;
                .toPayBtn {
                    display: inline-block;
                    width:68px;
                    height:24px;
                    line-height:24px;
                    border-radius:4px;
                }
            }
        }
        .item {
            margin-bottom: 12px;
            p {
                position: relative;
                span {
                    position: absolute;
                    left: 0;
                    top: 12px;
                    width:2px;
                    height:12px;
                    background:rgba(57,135,236,1);
                    border-radius:1px;
                }
            }
        }
        .buy-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            box-shadow: 0px 0px 9px 0px var(--blackShadow);
            .buy-centent {
                height: 48px;
                line-height: 48px;
                .buyBtn {
                    width: 93px;
                    height: 36px;
                    line-height: 36px;
                    border-radius: 18px;
                }
            }
        }
    }
</style>