<template>
    <div class="exchangeDetails dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">兑换明细</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" head-height='50'>
                    <template #loading>
                        <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                    </template>
                    <div class="content padding-lr">
                        <div class="gold flex flex-direction">
                            <div class="item-list bg-white flex flex-row">
                                <router-link :to="{path: '/exchangeInDetails'}" class="flex flex-row">
                                    <div class="left-img" style="margin-right: 8px;">
                                        <img src="../../assets/images/goldenCenter/calendar.png" alt="">
                                    </div>
                                    <div class="flex-sub flex flex-direction justify-between">
                                        <p class="text-sm text-blackDark text-cut_line_2">商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名…</p>
                                        <div class="item-bottom flex flex-row align-center justify-between">
                                            <div class="text-sm text-orangeDark"><span style="margin-right: 6px;">20金豆</span><span class="text-bold">兑换成功</span></div>
                                            <div><img src="../../assets/images/right.png" alt="" class="right-icon"></div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </van-pull-refresh>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'exchangeDetails',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                active: '1',
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
            goBack() {
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .exchangeDetails {
        
    }
</style>
<style lang="scss" scoped>
    .exchangeDetails {
        .gold {
            .item-list {
                height:110px;
                border-radius:4px;
                margin-bottom: 10px;
                padding: 12px 10px 12px 12px;
                &:first-child {
                    margin-top: 4px;
                }
                .left-img {
                    width: 86px;
                    height: 86px;
                    margin-right: 7px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .item-bottom {
                    height: 16px;
                    .right-icon {
                        width: 8px;
                        height: 10px;
                    }
                }
                
            }
        }
    }
</style>