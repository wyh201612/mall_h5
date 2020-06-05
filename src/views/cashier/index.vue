<template>
    <div class="cashier dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-blackDark text-df text-bold">收银台</span>
                </template>
                <template #right>
                    <router-link :to="{path:'/myGold'}" replace>
                        <span class="text-sm text-darkGray">我的订单</span>
                    </router-link>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier margin-bottom48 bg-white">
            <div class="content padding-lr margin-top-sm">
                
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
                    <div class="buyBtn bg-blue text-df text-center" @click="confirmPayment()">确认支付</div>
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
        name: 'cashier',
        components: {
            countTo
        },
        props:{
            
        },
        data() {
            return {
                activeNames: ['1'],
                checkedServiceAgreement: false,
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
                this.isLoading = true;
                // await this.queryInvestProduct();
                this.isLoading = false;
            },
            // 确认支付
            confirmPayment() {
            },
            goBack() {
                // this.$router.go(-1)
                this.$dialog.confirm({
                    title: '确定要离开收银台？',
                    message: '请在订单支付有效期内尽快完成支付',
                    confirmButtonText: '确认离开',
                    cancelButtonText: '继续支付'
                }).then(() => {
                    // on confirm
                    this.$router.replace({path: '/myGold'})
                }).catch(() => {
                    // on cancel
                });
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .cashier {
    }
</style>
<style lang="scss" scoped>
    .cashier {
        .margin-bottom48 {
            margin-bottom: 48px;
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