<template>
    <div class="effectiveBillFootprint dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">我的提单足迹</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier bg-white">
                <div class="content">
                    <div class="item">
                        <span class="tag text-sm bg-orangeDark">提单购买信息</span>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">商品名称</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">测试商品</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">购买时间</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">2007/05/02 19:00:22</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">购买价格</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">380.44元/克</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">商品克重</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">20克</span>
                            </template>
                        </van-cell>
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
                                <span class="text-sm text-blackDark">商品费用</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">380.44元</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">支付费用</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">380.44元</span>
                            </template>
                        </van-cell>
                    </div>
                    <div class="item item2">
                        <span class="tag text-sm bg-blue margin-top-lg">提单回租信息 2</span>
                        <van-steps direction="vertical" :active="2" active-color="#38f">
                            <van-step>
                                <template #inactive-icon>
                                    <span class="text-xs inactive-icon bg-blue text-center">1</span>
                                </template>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租开始时间</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">2007/05/02 19:00:22</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租期限</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">2007/05/02 19:00:22</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租到期时间</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">2007/05/02 19:00:22</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租价格</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">380.44元/克</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租金生金奖励</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">380.44元</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">黄金红包奖励</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">380.44元</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租总奖励</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">380.44元</span>
                                    </template>
                                </van-cell>
                            </van-step>
                            <van-step>
                                <template #inactive-icon>
                                    <span class="text-xs inactive-icon bg-blue text-center">2</span>
                                </template>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租开始时间</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">2007/05/02 19:00:22</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租期限</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">2007/05/02 19:00:22</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租到期时间</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">2007/05/02 19:00:22</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租价格</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">380.44元/克</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租金生金奖励</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">380.44元</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">黄金红包奖励</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">380.44元</span>
                                    </template>
                                </van-cell>
                                <van-cell>
                                    <template #title>
                                        <span class="text-sm text-blackDark">回租总奖励</span>
                                    </template>
                                    <template #default>
                                        <span class="text-sm text-darkGray">380.44元</span>
                                    </template>
                                </van-cell>
                            </van-step>
                            <van-step>
                            </van-step>
                        </van-steps>
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
        name: 'effectiveBillFootprint',
        components: {
        },
        props:{
            
        },
        data() {
            return {
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
            goBack() {
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .effectiveBillFootprint {
        .van-steps {
            .van-steps__items {
                .van-step {
                    &:last-child {
                        .van-step__circle-container {
                            display: none;
                        }
                    }
                }
            }
        }
        .van-steps--vertical {
            padding: 0 0 0 25px;
            .van-step--vertical {
                padding: 10px 10px 0 0;
                &:first-child {
                    .van-step__line {
                        top: 20px;
                    }
                }
                .van-step__line {
                    top: 0;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .effectiveBillFootprint {
        .header {
            background: #fff;
        }
        .van-cell {
            padding: 4px 15px 4px 25px;
        }
        .van-cell:not(:last-child)::after {
            border-bottom: 0;
        }
        
        .inactive-icon {
            display: inline-block;
            width: 11px;
            height: 11px;
            line-height: 11px;
            border-radius: 100%;
        }
        .item {
            .tag {
                overflow: hidden;
                display: inline-block;
                height: 24px;
                line-height: 24px;
                padding: 0 12px 0 30px;
                border-radius: 0px 100px 100px 0px;
            }
        }
        .item2 {
            .van-cell {
                padding: 0 5px 14px 0;
                line-height: 1.2;
            }
        }
    }
</style>