<template>
    <div class="confirmOrder dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">确定订单</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier margin-bottom48">
            <div class="content padding-lr margin-top-sm flex flex-row align-start margin-top">
                <van-checkbox v-model="checkedServiceAgreement" checked-color="#EC501F" class="serviceAgreement margin-right-xs" icon-size="16px" style="margin-top: 2px;"></van-checkbox>
                <div class="text-darkGray">
                    <div class="text-sm">
                        我已阅读并同意<span class="text-orangeLight">《委托购租服务协议》</span>
                    </div>
                    <div class="text-sm">并同意授权E签宝提供具有法律效力的电子签名与存证服务</div>
                </div>
            </div>
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
                    <div class="buyBtn bg-blue text-df text-center" @click="placeOrder()">提交订单</div>
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
        name: 'confirmOrder',
        components: {
            countTo
        },
        props:{
            
        },
        data() {
            return {
                checkedServiceAgreement: true,
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
                // await this.queryInvestProduct();
            },
            // 提交订单
            placeOrder() {
                this.$router.replace({path: '/paymentOrder'})
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
    .confirmOrder {
    }
</style>
<style lang="scss" scoped>
    .confirmOrder {
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