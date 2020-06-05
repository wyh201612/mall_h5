<template>
    <div class="confirmOrder dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">填写订单</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier margin-bottom48">
                <div class="content padding-lr">
                    <div class="item bg-white margin-bottom-sm">
                        <div class="product flex flex-row">
                            <img class="productPicture" src="http://cdn.mayihuangjin.com/FssdCR3hJ2qig6683gBA-UGBrfP3?800/800" alt="">
                            <div class="flex-sub">
                                <div class="product-title text-blackDark text-df text-cut_line_2">投资金条AU99.99产品投资金条投资金条投资金条投金投资金条AU99.99产品投资金条投资金条投资金条投金条</div>
                                <div class="product-gar text-darkGray text-sm">投资金条AU99.99产品投资</div>
                            </div>
                        </div>
                    </div>
                    <div class="item bg-white margin-bottom-sm">
                        <div class="peice">
                            <div class="text-sm text-bold text-blackDark">买入克重</div>
                            <van-field v-model="gramWeight" type='digit' label="" placeholder="请输入买入的克重" @input='inputGramWeight' />
                        </div>
                    </div>
                    <div class="item bg-white margin-bottom-sm">
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">支付克重</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">20克</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">购买价格</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">6.00元</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">产品金额</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">6.00元</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">加工费</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">6.00元</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">运输费</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">12.00元</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">应支付金额</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-blue">24.00元</span>
                            </template>
                        </van-cell>
                    </div>
                    <div class=" flex flex-row align-start">
                        <van-checkbox v-model="checkedServiceAgreement" checked-color="#3987ec" class="serviceAgreement margin-right-xs" icon-size="16px" style="margin-top: 2px;"></van-checkbox>
                        <div class="text-darkGray">
                            <div class="text-sm" :class="checkedServiceAgreement?'':'text-gray'">
                                我已阅读并同意<span :class="checkedServiceAgreement?'text-blue':''">《委托购租服务协议》</span>
                            </div>
                            <div class="text-sm">并同意授权E签宝提供具有法律效力的电子签名与存证服务</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fixed-box bg-white padding-lr flex flex-row align-center justify-end">
            <div class="margin-right-lg text-right">
                <div class="text-sm text-blue">奖励￥1.00</div>
                <div class="text-sm text-blackDark text-bold">应付款 ￥18.00</div>
            </div>
            <div class="buyBtn bg-blue text-df text-center" @click="placeOrder">立即购买</div>
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
                gramWeight: '',
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
            // 克重输入框
            inputGramWeight(value) {
                console.log(value)
                // if (value%5!=0) {
                //     this.gramWeight = '';
                // } else {
                //     console.log(value)
                // }
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
        .van-cell {
            padding: 5px 10px;
        }
        .van-cell:not(:last-child)::after {
            border-bottom: 0;
        }
        .item {
            overflow: hidden;
            border-radius:4px;
            .product {
                height: 115px;
                padding: 8px;
                .productPicture {
                    width: 99px;
                    height: 99px;
                    margin-right: 8px;
                }
                .product-title {
                    margin-top: 10px;
                    margin-bottom: 8px;
                }
                .product-gar {
                    height: 17px;
                    line-height: 17px;
                }
            }
            .peice {
                padding: 10px;
                .van-cell {
                    padding: 10px 0;
                    border-bottom: 1px solid #C5C5C5;
                    margin-bottom: 10px;
                }
            }
            .iconimg {
                width: 16px;
                height: 16px;
            }
        }
        .serviceAgreement {
            font-size: 12px;
        }
        .fixed-box {
            box-shadow: 0 -3px 10px #f1f1f1;
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            .buyBtn {
                width:93px;
                height:36px;
                line-height:36px;
                border-radius:18px;
            }
        }
    }
</style>