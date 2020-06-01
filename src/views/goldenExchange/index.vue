<template>
    <div class="goldenExchange dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">金豆换券</span>
                </template>
                <template #right>
                    <router-link :to="{path:'/exchangeDetails'}">
                        <span class="text-sm text-darkGray">兑换明细</span>
                    </router-link>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
                <template #loading>
                    <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                </template>
                <div class="content padding-lr">
                    <div class="flex flex-row flex-wrap">
                        <div class="list-item bg-white">
                            <div class="img">
                                <img src="../../assets/images/goldenCenter/avatar.png" alt="">
                            </div>
                            <p class="name text-xs text-darkGray">商城优惠券</p>
                            <div class="goldenNum flex flex-row align-center justify-between">
                                <div class="text-xl text-orangeDark">20020<span class="text-xs" style="transform: scale(0.83,0.83);transform-origin: 0 0;display: inline-block;">金豆</span></div>
                                <div class="btn text-sm text-white bg-orangeLight text-center"><router-link :to="{path: '/exchangeGoodsDetails'}">兑换</router-link></div>
                            </div>
                            <p class="text-xs text-gray text-through price">20元</p>
                        </div>
                    </div>
                </div>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'goldenExchange',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                isBackground: false,
                isLoading: false,
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
                this.isLoading = false;
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
    .goldenExchange {
    }
</style>
<style lang="scss" scoped>
    .goldenExchange {
        .list-item {
            width: 167px;
            height: 235px;
            margin-right: 11px;
            margin-bottom: 11px;
            padding: 0 12px 0 15px;
            border-radius:4px;
            &:nth-last-of-type(2n+1) {
                margin-right: 0;
            }
            .name,.price {
                height: 14px;
                line-height: 14px;
                margin-bottom: 9px;
            }
            .goldenNum {
                height: 25px;
            }
            .img {
                width: 131px;
                height: 131px;
                margin: 18px auto 12px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .btn {
                width:45px;
                height:21px;
                line-height:21px;
                border-radius:11px;
            }
        }
    }
</style>