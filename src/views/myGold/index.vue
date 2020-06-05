<template>
    <div class="myGold dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">我的黄金</span>
                    </template>
                    <template #right>
                        <router-link :to="{path:'/effectiveBill'}">
                            <span class="text-sm text-blue">已生效</span>
                        </router-link>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" head-height='50'>
                    <template #loading>
                        <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                    </template>
                    <div class="content padding-lr">
                        <div class="top-price flex flex-row justify-between bg-white padding-tb">
                            <div class="flex flex-direction flex-sub text-center" style="border-right: 1px solid #f1f1f1;">
                                <span class="text-sm tips-title">黄金持有总量(克)</span>
                                <span class="text-xxll text-bold text-blue tips-price">{{billNums.bills}}</span>
                            </div>
                            <div class="flex flex-direction flex-sub text-center">
                                <span class="text-sm tips-title">已回租黄金奖励(元)</span>
                                <span class="text-xxll text-bold text-orangeDark tips-price">{{billNums.rewards}}</span>
                            </div>
                        </div>
                    </div>
                    <van-tabs v-model="active" sticky swipeable animated offset-top='48' color='#3987ec' background='#f7f7f7' title-inactive-color='#6e6e6e' title-active-color='#3987ec' :border='false'>
                        <van-tab title="待支付" dot>
                            <div class="item flex flex-row padding-lr padding-tb-sm bg-white margin-lr margin-tb-sm" v-for="(item,index) in 10" :key="index">
                                <router-link :to="{path:'/paymentOrder'}" class="flex flex-row" style="width: 100%;">
                                    <img src="http://cdn.mayihuangjin.com/FssdCR3hJ2qig6683gBA-UGBrfP3?800/800" alt="">
                                    <div class="flex flex-direction justify-between flex-sub text-sm">
                                        <div>
                                            <div class="text-cut_line_2 text-blackDark">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div>
                                            <div class="text-darkGray margin-top-xs" style="height: 14px;line-height: 14px;">
                                                <span class="margin-bottom-xs">克重 2克</span>
                                                <span style="display: inline-block;width: 1px;height: 10px;background:rgba(216,216,216,1);margin: 0 12px;"></span>
                                                <span>数量 1</span>
                                            </div>
                                        </div>
                                        <div class="text-right flex flex-row align-center justify-end">
                                            <span class="text-price text-blue text-lg" style="margin-right: 12px;">200.00</span>
                                            <span class="buyBtn bg-blue text-center text-sm">去付款 01:26</span>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </van-tab>
                        <van-tab title="待处理">
                            <div class="itemz margin text-gray bg-white" v-for="(item,index) in 10" :key="index">
                                <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails',query:{active: 1}}" />
                                <van-cell title="提单克重" value="20克" />
                                <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                                <div class="flex flex-row justify-end" style="padding: 10px 16px;">
                                    <span class="btn text-blue text-sm text-center margin-right-sm" @click="tijin">提金</span>
                                    <span class="btn text-blue text-sm text-center margin-right-sm" @click="sell">出售</span>
                                    <span class="btn bg-blue text-sm text-center" @click="leaseblack">回租</span>
                                </div>
                            </div>
                        </van-tab>
                        <van-tab title="回租中">
                            <div class="itemz margin text-gray bg-white" v-for="(item,index) in 10" :key="index">
                                <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails',query:{active: 2}}" />
                                <van-cell title="提单克重" value="20克" />
                                <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                                <van-cell title="回租期限" value="60天" />
                            </div>
                        </van-tab>
                        <van-tab title="冻结中">
                            <div class="itemz margin text-gray bg-white" v-for="(item,index) in 10" :key="index">
                                <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails',query:{active: 3}}" />
                                <van-cell title="提单克重" value="20克" />
                                <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                            </div>
                        </van-tab>
                        <van-tab title="已失效">
                            <div class="itemz margin text-gray bg-white" v-for="(item,index) in 10" :key="index">
                                <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/orderDetails',query:{active: 4}}" />
                                <van-cell title="提单克重" value="20克" />
                                <van-cell title="失效原因">
                                    <template #default>
                                        <span class="text-orangeDark">订单超时</span>
                                    </template>
                                </van-cell>
                            </div>
                        </van-tab>
                    </van-tabs>
                </van-pull-refresh>
            </div>
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
            tijin() {
                this.$router.push({path: '/effectiveBillWithdrawal',query:{active: 1}})
            },
            sell() {
                this.$router.push({path: '/effectiveBillSell',query:{active: 1}})
            },
            leaseblack() {
                this.$router.push({path: '/effectiveBillLeaseback',query:{active: 1}})
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
            top: 48px !important;
        }
    }
</style>
<style lang="scss" scoped>
    .myGold {
        .top-price {
            height: 130px;
            border-radius:4px;
            .tips-title {
                height:17px;
                line-height:17px;
                margin-top: 18px;
                margin-bottom: 16px;
            }
            .tips-price {
                height:28px;
                line-height:28px;
            }
        }
        .item {
            height: 148px;
            border-radius:4px;
            img {
                width: 124px;
                height: 124px;
                margin-right: 12px;
            }
            .buyBtn {
                display: inline-block;
                width:91px;
                height:25px;
                line-height: 25px;
                border-radius:13px;
            }
        }
        .itemz {
            border-radius:4px;
            .btn {
                display: inline-block;
                width:60px;
                height:25px;
                line-height: 24px;
                border-radius:13px;
                border:1px solid rgba(57,135,236,1);
            }
            .van-cell {
                background: transparent;
            }
            .van-cell__title {
                flex: inherit;
            }
            .btn {
                display: inline;
            }
        }
    }
</style>