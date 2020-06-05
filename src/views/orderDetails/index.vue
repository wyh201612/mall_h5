<template>
    <div class="orderDetails dashboard-container flex flex-direction bg-white">
        <div class="bg-white">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">订单详情</span>
                    </template>
                    <template #right>
                        <a :href="'tel:'+store_tel">
                            <span class="text-sm text-blue">联系客服</span>
                        </a>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier bg-white">
                <div class="content">
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">订单状态</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-gray">已失效</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">失效原因</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-orangeDark">订单超时</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">提单生成时间</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">2020-05-13 17:30:38</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">提单编号</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">TB164654513215411320</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">操作流水</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">TB164654513215411320</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">产品名称</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">产品名称</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">产品类型</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">实物金</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">提单克重</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">20克</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">订单金额</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">200元</span>
                        </template>
                    </van-cell>
                </div>
                <!-- <div class="content2">
                    <div class="item">
                        <p class="text-sm text-darkGray">订单基本信息<span></span><i class="fr text-sm text-blue">已预约</i></p>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">提金时间</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">2020-05-13 17:30:38</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">提金方式</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">快递寄送</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">商品名称</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">商品名称</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">收件人</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">刘先生</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">联系电话</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">1508888444</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">收货地址</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">辽宁省营口市盖州市万花街579号</span>
                            </template>
                        </van-cell>
                    </div>
                    <div class="item">
                        <p class="text-sm text-darkGray margin-top-sm">提单信息<span></span></p>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">提单编号</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">TB164654513215411320</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">提单克重</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">20克</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">提单生成时间</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">2007/05/02 19:00:22</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">提单来源</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">买金</span>
                            </template>
                        </van-cell>
                    </div>
                    <div class="item">
                        <p class="text-sm text-darkGray margin-top-sm">支付信息<span></span></p>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">加工费</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">20元</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">共计支付</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">20元</span>
                            </template>
                        </van-cell>
                    </div>
                </div> -->
            
            </div>
        </div>
        <div class="fixed-box">
            <!-- <div class="buyBtn text-df text-center bg-blue">重新购买</div> -->
            <div class="buyBtn text-df text-center bg-blue">取消预约</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'orderDetails',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                store_tel: '0571-56387125'
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
                localStorage.setItem('activeTabs',this.$route.query.active);
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .orderDetails {
        
    }
</style>
<style lang="scss" scoped>
    .orderDetails {
        .content {
            margin-bottom: 48px;
            .van-cell {
                padding: 16px 15px;
            }
        }
        .content2 {
            margin-bottom: 48px;
            .item {
                position: relative;
                padding-bottom: 12px;
                .van-cell {
                    padding: 5px 15px;
                }
                .van-cell:not(:last-child)::after {
                    border-bottom: 0;
                }
                .van-cell__title {
                    flex: inherit;
                }
                p {
                    position: relative;
                    margin: 0 0 0 7px;
                    padding: 10px 15px 10px 8px;
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
                &:last-child {
                    &::after {
                        border-bottom: 0;
                    }
                }
                &::after {
                    position: absolute;
                    box-sizing: border-box;
                    content: ' ';
                    pointer-events: none;
                    right: 0;
                    bottom: 0;
                    left: 0.42667rem;
                    border-bottom: 0.02667rem solid #ebedf0;
                    -webkit-transform: scaleY(.5);
                    transform: scaleY(.5);
                }
            }
        }
        .header {
            background: #fff;
        }
        
        .fixed-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            .buyBtn {
                width:345px;
                height:36px;
                line-height:36px;
                border-radius:18px;
                margin: 6px auto;
            }
        }
    }
</style>