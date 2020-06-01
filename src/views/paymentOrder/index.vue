<template>
    <div class="paymentOrder dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">支付订单</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier margin-bottom48 bg-white">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" head-height='50'>
                <template #loading>
                    <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                </template>
                <div class="content padding-lr margin-top-sm">
                    <div class="flex flex-row align-center justify-between text-lg margin-bottom-sm">
                        <span class="text-blackDark">等待支付</span>
                        <span class="text-darkGray">02:27</span>
                    </div>
                    <div class="text-darkGray text-sm margin-bottom-xs">购买金额已锁定</div>
                    <div class="text-darkGray text-sm">锁定时间为3分钟请在结束前完成支付。</div>
                    <div class="margin-top">
                        <div class="text-blackDark van-hairline--bottom padding-bottom-sm text-lg">订单基本信息</div>
                        <div class="flex flex-row align-center justify-between text-df van-hairline--bottom padding-tb">
                            <span>购买金价</span>
                            <span class="text-orangeLight">1000.00元/克</span>
                        </div>
                        <div class="flex flex-row align-center justify-between text-df van-hairline--bottom padding-tb">
                            <span>商品名称</span>
                            <span class="">测试</span>
                        </div>
                        <div class="flex flex-row align-center justify-between text-df van-hairline--bottom padding-tb">
                            <span>商品克重</span>
                            <span class="">10克</span>
                        </div>
                        <div class="flex flex-row align-center justify-between text-df van-hairline--bottom padding-tb">
                            <span>商品数量</span>
                            <span class="">1件</span>
                        </div>
                        <van-collapse v-model="activeNames">
                            <van-collapse-item name="1">
                                <template #title>
                                    <div>订单支付信息</div>
                                </template>
                                <div class="flex flex-row align-center justify-between text-df van-hairline--bottom padding-tb">
                                    <span>支付克重</span>
                                    <span class="">10克</span>
                                </div>
                                <div class="flex flex-row align-center justify-between text-df van-hairline--bottom padding-tb">
                                    <span>商品费用</span>
                                    <span class="">10元</span>
                                </div>
                                <div class="flex flex-row align-center justify-between text-df padding-tb">
                                    <span>支付费用</span>
                                    <span class="">10元</span>
                                </div>
                            </van-collapse-item>
                        </van-collapse>
                    </div>
                    <div class="padding-tb-sm flex flex-row align-start margin-top">
                        <van-checkbox v-model="checkedServiceAgreement" checked-color="#EC501F" class="serviceAgreement margin-right-xs" icon-size="16px" style="margin-top: 2px;"></van-checkbox>
                        <div class="text-darkGray">
                            <div class="text-sm">
                                我已阅读并同意<span class="text-orangeLight">《委托购租服务协议》</span>
                            </div>
                            <div class="text-sm">并同意授权E签宝提供具有法律效力的电子签名与存证服务</div>
                        </div>
                    </div>
                </div>
            </van-pull-refresh>
        </div>
        <div class="buy-box bg-white">
            <div class="buy-centent">
                <div class="flex flex-row align-center justify-between">
                    <div class="flex flex-row align-center">
                        <div class="text-sm text-darkGray margin-right-sm">预计支付</div>
                        <div class="text-price text-orangeDark text-xxl">
                            <countTo ref="countTo2" :startVal='0' :endVal='1000' :duration='4000' :decimals='2'></countTo>
                        </div>
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
                activeNames: ['1'],
                isBackground: false,
                isLoading: false,
                checkedServiceAgreement: true,
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
            // 立即购买
            buyNow() {
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
            padding: 10px 0;
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
        .buy-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            box-shadow: 0px 0px 9px 0px var(--blackShadow);
            .buy-centent {
                padding: 0 12px 0 14px;
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