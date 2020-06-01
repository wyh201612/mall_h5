<template>
    <div class="myGold dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">我的黄金</span>
                </template>
                <template #right>
                    <router-link :to="{path:'/effectiveBill'}">
                        <span class="text-sm text-darkGray">已生效</span>
                    </router-link>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier bg-white">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" head-height='50'>
                <template #loading>
                    <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                </template>
                <div class="content padding-lr margin-top-lg">
                    <div class="flex flex-row justify-between van-hairline--bottom">
                        <div class="flex flex-direction">
                            <span class="text-lg">黄金持有总量（克）</span>
                            <span class="text-xl text-orangeDark margin-tb-sm">{{billNums.bills}}</span>
                        </div>
                        <div class="flex flex-direction">
                            <span class="text-lg">已回租黄金奖励（克）</span>
                            <span class="text-xl text-orangeDark margin-tb-sm">{{billNums.rewards}}</span>
                        </div>
                    </div>
                </div>
                <van-tabs v-model="active" sticky swipeable animated offset-top='40' color='#EC501F' title-inactive-color='#6e6e6e' title-active-color='#EC501F' :border='false'>
                    <van-tab title="待支付" dot>
                        <div class="item flex flex-row padding van-hairline--bottom">
                            <router-link :to="{path:'/paymentOrder'}" class="flex flex-row" style="width: 100%;">
                                <img src="../../assets/images/checked.png" alt="">
                                <div class="flex flex-direction flex-sub text-sm">
                                    <div class="flex flex-row align-center justify-between margin-bottom-sm">
                                        <span>测试</span>
                                        <span class="text-df text-orangeDark text-price text-bold">1000</span>
                                    </div>
                                    <div class="flex flex-row justify-between">
                                        <div>
                                            <p class="margin-bottom-xs">黄金克重：2克</p>
                                            <p>数量：1</p>
                                        </div>
                                        <van-button round type="info" size="small" color="#EC501F">付款 01:26</van-button>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </van-tab>
                    <van-tab title="待处理">
                        <div class="itemz margin shadow text-gray">
                            <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails',query:{active: 1}}" />
                            <van-cell title="提单克重" value="20克" />
                            <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                            <div class="flex flex-row justify-end" style="padding: 10px 16px;">
                                <van-button round type="info" class="text-center btn margin-right-sm" plain size="small" color="#EC501F" :to="{path: '/effectiveBillSell',query:{active: 1}}">出售</van-button>
                                <van-button round type="info" class="text-center btn" size="small" color="#EC501F" :to="{path: '/effectiveBillLeaseback',query:{active: 1}}">回租</van-button>
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="回租中">
                        <div class="itemz margin shadow text-gray">
                            <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails',query:{active: 2}}" />
                            <van-cell title="提单克重" value="20克" />
                            <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                            <van-cell title="回租期限" value="60天" />
                        </div>
                    </van-tab>
                    <van-tab title="冻结中">
                        <div class="itemz margin shadow text-gray">
                            <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails',query:{active: 3}}" />
                            <van-cell title="提单克重" value="20克" />
                            <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                        </div>
                    </van-tab>
                    <van-tab title="已失效">
                        <div class="itemz margin shadow text-gray">
                            <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/orderDetails',query:{active: 4}}" />
                            <van-cell title="产品名称" value="测试" />
                            <van-cell title="失效原因">
                                <template #default>
                                    <span class="text-red">订单超时</span>
                                </template>
                            </van-cell>
                        </div>
                    </van-tab>
                </van-tabs>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'myGold',
        components: {
        },
        props:{
            billNums:{
                type: Object
            },
        },
        data() {
            return {
                isLoading: false,
                active: 0
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            this.info();
            if(localStorage.getItem('activeTabs')!=''||localStorage.getItem('activeTabs')!=null||localStorage.getItem('activeTabs')!=undefined) {
                let activeN = localStorage.getItem('activeTabs')
                this.active = Number(activeN);
                localStorage.removeItem("activeTabs");
            }
        },
        methods: {
            async info() {
                this.isLoading = true;
                // await this.queryInvestProduct();
                this.isLoading = false;
            },
            async onRefresh() {
                await this.info();
                
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
    .myGold {
        .van-tab.van-tab--active {
            font-weight: 600;
        }
        .van-tabs__line {
            height: 4px;
            width: 30px !important;
        }
        .van-sticky--fixed {
            top: 40px !important;
        }
    }
</style>
<style lang="scss" scoped>
    .myGold {
        .item {
            img {
                width: 58px;
                height: 58px;
                margin-right: 20px;
            }
        }
        .itemz {
            box-shadow: 0 0 10px 0;
            .van-cell__title {
                flex: inherit;
            }
            .btn {
                display: inline;
            }
        }
    }
</style>