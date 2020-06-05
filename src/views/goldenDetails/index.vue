<template>
    <div class="goldenDetails dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">使用明细</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier margin-bottom48 bg-white">
                <div class="content padding-lr">
                    <div class="gold flex flex-direction align-center justify-center">
                        <div class="text-sm text-white" style="height: 14px;line-height: 14px;margin-top: 25px;">可用金豆(个)</div>
                        <div class="flex flex-row align-center justify-center margin-top-sm" style="height: 35px;">
                            <img src="../../assets/images/goldenCenter/goldenBeans.png" alt="">
                            <span class="text-sxxlm text-white">{{goldenBeansInfo.usableBean}}</span>
                        </div>
                        <div class="text-xs text-center text-white" style="margin-top: 8px;">
                            累计获得<span class="text-lg" style="margin-left: 4px;">{{goldenBeansInfo.incomeBean}}</span>
                        </div>
                    </div>
                </div>
                <van-tabs v-model="active" sticky color='#EC501F' title-inactive-color='#6e6e6e' title-active-color='#EC501F' offset-top='48' :border='false' background='#ffffff'>
                    <van-tab title="收入">
                        <div class="item flex flex-row align-center justify-between">
                            <div>
                                <p class="title text-df text-blackDark">每日签到</p>
                                <p class="text-xs text-gray">2020/04/03 09:57:51</p>
                            </div>
                            <div>
                                <span class="text-xl text-blackDark">+20</span>
                                <img src="../../assets/images/goldenCenter/goldenBeans-s.png" alt="">
                            </div>
                        </div>
                    </van-tab>
                    <van-tab title="支出">
                        <div class="item flex flex-row align-center justify-between">
                            <div>
                                <p class="title text-df text-blackDark">每日签到</p>
                                <p class="text-xs text-gray">2020/04/03 09:57:51</p>
                            </div>
                            <div>
                                <span class="text-xl text-blackDark">-20</span>
                                <img src="../../assets/images/goldenCenter/goldenBeans-s.png" alt="">
                            </div>
                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'goldenDetails',
        components: {
        },
        props:{
            goldenBeansInfo:{
                type: Object
            },
        },
        data() {
            return {
                active: 0,
                isBackground: false,
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
    .goldenDetails {
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
    .goldenDetails {
        .header {
            background: #fff;
        }
        .gold {
            height: 145px;
            background: url('../../assets/images/goldenCenter/personalCenter-bg.png') left top no-repeat;
            background-size: 100% 100%;
            img {
                width: 35px;
                height: 35px;
                margin-right: 7px;
            }
        }
        .item {
            padding: 0 30px;
            height: 52px;
            margin-bottom: 10px;
            &:first-child {
                margin-top: 20px;
            }
            .title {
                margin-bottom: 2px;
            }
            img {
                width: 16px;
                height: 16px;
                margin-left: 4px;
            }
        }
    }
</style>