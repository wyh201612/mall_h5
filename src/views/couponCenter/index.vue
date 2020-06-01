<template>
    <div class="couponCenter dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">优惠福利中心</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" head-height='50'>
                <template #loading>
                    <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                </template>
                <div class="content padding-lr margin-top-sm">
                    <div v-if="banner[0]">
                        <div class="banner bg-white" :style="'background: url('+banner[0].imgUrl+') center no-repeat;'"></div>
                    </div>
                    <div class="goldenNum-box bg-white flex flex-row align-center justify-between padding-lr-lg">
                        <div class="">
                            <p class="text-df title">金豆换券</p>
                            <p class="text-sm">当前拥有<span class="goldenNum text-orangeDark">60</span>个金豆</p>
                        </div>
                        <div class="exchange text-center text-xs bg-orangeDark">立即兑换</div>
                    </div>
                    <div class="couponList-box bg-white">
                        <div class="title text-df">我的优惠</div>
                        <van-tabs v-model="active" sticky swipeable animated color='#EC501F' title-inactive-color='#6e6e6e' title-active-color='#EC501F' offset-top='40' :border='false' background='#ffffff'>
                            <van-tab :title="'可使用 '+ availableList.length">
                                <div class="coupon-item flex flex-row align-center justify-between" v-for="(item,index) in availableList" :key="index">
                                    <div class="coupon-left flex flex-row align-center">
                                        <div class="coupon-left-price text-center">
                                            <div class="text-price text-sxl text-orangeDark text-bold price">{{item.discountAmount}}</div>
                                            <div class="text-xs text-gray title-t">满{{item.transactionAmount}}可用</div>
                                        </div>
                                        <div>
                                            <div class="text-sm text-darkGray" style="margin-bottom: 6px;margin-top: 12px;">{{item.name}}</div>
                                            <div class="text-xs text-gray title-t">有效期 {{item.indateStartTime}}-{{item.indateTime}}</div>
                                        </div>
                                    </div>
                                    <div class="availabBtn text-xs text-orangeDark text-center margin-right-lg">去使用</div>
                                </div>
                                <div class="noCoupon-box" v-if="availableList.length==0">
                                    <img src="../../assets/images/goldenCenter/noCoupon2.png" alt="">
                                    <div class="text-center text-xs text-gray">无任何记录~</div>
                                </div>
                            </van-tab>
                            <van-tab :title="'已使用 '+ usedList.length">
                                <div class="coupon-item flex flex-row align-center justify-between" v-for="(item,index) in usedList" :key="index">
                                    <div class="coupon-left flex flex-row align-center">
                                        <div class="coupon-left-price text-center">
                                            <div class="text-price text-sxl text-gray text-bold price">5</div>
                                            <div class="text-xs text-gray title-t">满50可用</div>
                                        </div>
                                        <div>
                                            <div class="text-sm text-darkGray" style="margin-bottom: 6px;margin-top: 12px;">商城优惠券</div>
                                            <div class="text-xs text-gray title-t">有效期 2020.1.12-2020.4.2</div>
                                        </div>
                                    </div>
                                    <div class="userBtn text-xs text-gray text-center margin-right-lg">已使用</div>
                                </div>
                                <div class="noCoupon-box" v-if="usedList.length==0">
                                    <img src="../../assets/images/goldenCenter/noCoupon2.png" alt="">
                                    <div class="text-center text-xs text-gray">无任何记录~</div>
                                </div>
                            </van-tab>
                            <van-tab :title="'已失效 '+ exceedList.length">
                                <div class="coupon-item flex flex-row align-center justify-between" v-for="(item,index) in exceedList" :key="index">
                                    <div class="coupon-left flex flex-row align-center">
                                        <div class="coupon-left-price text-center">
                                            <div class="text-price text-sxl text-gray text-bold price">5</div>
                                            <div class="text-xs text-gray title-t">满50可用</div>
                                        </div>
                                        <div>
                                            <div class="text-sm text-darkGray" style="margin-bottom: 6px;margin-top: 12px;">商城优惠券</div>
                                            <div class="text-xs text-gray title-t">有效期 2020.1.12-2020.4.2</div>
                                        </div>
                                    </div>
                                    <div class="exceedBtn text-xs text-gray text-center margin-right-lg">已失效</div>
                                </div>
                                <div class="noCoupon-box" v-if="exceedList.length==0">
                                    <img src="../../assets/images/goldenCenter/noCoupon2.png" alt="">
                                    <div class="text-center text-xs text-gray">无任何记录~</div>
                                </div>
                            </van-tab>
                        </van-tabs>
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
        name: 'couponCenter',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                isLoading: false,
                banner: {},
                active: 0,
                activityCouponMemberList: {},
                availableList: [],
                usedList: [],
                exceedList: [],
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
                await this.getBannersByChannel('coupon-top')
                await this.getActivityCouponMemberList();
            },
            async onRefresh() {
                this.isLoading = true;
                await this.info();
                this.isLoading = false;
            },
            // 获取各个部位的banner
            async getBannersByChannel(position) {
                let data = await this.$api.getBannersByChannel('',position);
                this.banner = data;
            },
            async getActivityCouponMemberList() {
                let params = {
                    type: 2
                }
                let data = await this.$api.getActivityCouponMemberList(params,getCookie('accessToken'));
                this.activityCouponMemberList = data;
                this.availableList = data.usablenessCoupons;
                this.usedList = data.usedCoupons;
                this.exceedList = data.outdatedCoupons;
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
    .couponCenter {
        .van-tabs__line {
            height: 4px;
            width: 30px !important;
        }
        .van-sticky--fixed {
            top: 40px !important;
        }
        .van-list__error-text, .van-list__finished-text, .van-list__loading {
            background: #f7f7f7;
        }
    }
</style>
<style lang="scss" scoped>
    .couponCenter {
        .banner {
            background-size: 100% 100% !important;
            border-radius: 4px;
            height: 88px;
            margin-bottom: 12px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .goldenNum-box {
            margin-bottom: 12px;
            border-radius: 4px;
            height: 74px;
            .title {
                margin-bottom: 7px;
            }
            .exchange {
                width:60px;
                border-radius:4px;
                padding: 1px 0;
            }
            .goldenNum {
                margin: 0 4px;
            }
        }
        .couponList-box {
            overflow: hidden;
            border-radius:4px;
            margin-bottom: 16px;
            .noCoupon-box {
                height: 280px;
                img {
                    width: 100%;
                    margin-bottom: 7px;
                    margin-top: 40px;
                }
            }
            
            .title {
                margin-left: 21px;
                margin-top: 14px;
                margin-bottom: 10px;
            }
            .coupon-item {
                height: 92px;
                .coupon-left {
                    .coupon-left-price {
                        width: 95px;
                        .price {
                            height: 40px;
                        }
                        .text-price::before {
                            font-size: 56%;
                        }
                        .title-t {
                            height: 14px;
                            line-height: 14px;
                        }
                    }
                }
                .availabBtn {
                    width:47px;
                    border-radius:4px;
                    border:1px solid var(--orangeDark);
                    padding: 1px 0;
                }
                .userBtn,.exceedBtn {
                    width:47px;
                    border-radius:4px;
                    border:1px solid var(--gray);
                    padding: 1px 0;
                }
            }
        }
    }
</style>