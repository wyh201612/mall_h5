<template>
    <div class="shop dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="contaier" style="margin-top: 0;">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
                    <template #loading>
                        <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                    </template>
                    <div class="header" :class="{'blue':isBackground}">
                        <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                            <template #left>
                                <img src="../../assets/images/bai-back.png" alt="" class="back-icon" v-show="isBackground">
                                <img src="../../assets/images/back.png" alt="" class="back-icon" v-show="!isBackground">
                            </template>
                            <template #right>
                                <img src="../../assets/images/index-icon.png" alt="" class="index-icon" @click="loginInfo" v-show="accessToken!=null&&accessToken!=''&&accessToken!=undefined">
                                <!-- <van-icon name="user-circle-o" class="text-xl" :color="isBackground?'#ffffff':'#6E6E6E'" @click="loginInfo" v-show="accessToken!=null&&accessToken!=''&&accessToken!=undefined" /> -->
                            </template>
                        </van-nav-bar>
                    </div>
                    <div class="bg">
                        <span class="text-white text-xlx text-center">xx融资租赁</span>
                    </div>
                    <div class="content padding-lr">
                        <div class="text-center box bg-white flex flex-row align-center justify-center">
                            <div v-if="accessToken!=null&&accessToken!=''&&accessToken!=undefined">
                                <div class="text-sm padding-top text-gray">
                                    当前持有(克)
                                    <img src="../../assets/images/icon_eye_open.png" alt="" class="icon_eye vertical-middle" @click="clickShowGoldNum" v-show="showGoldNum">
                                    <img src="../../assets/images/icon_eye_close.png" alt="" class="icon_eye vertical-middle" @click="clickShowGoldNum" v-show="!showGoldNum">
                                </div>
                                <div class="flex flex-row align-center justify-center text-xl padding-tb" v-show="showGoldNum">
                                    <span class="text-blue text-sxxll" style="margin-right: 8px;">{{billNums.bills}}</span>
                                    <router-link :to="{path:'/myGold'}" class="flex flex-direction align-center">
                                        <span class="goGlodDetails text-xs text-gray">详情</span>
                                    </router-link>
                                </div>
                                <div class="flex flex-row align-center justify-center text-xl padding-tb" v-show="!showGoldNum">
                                    <span class="text-blue text-sxxll" style="padding-top: 9px;height: 51px;margin-right: 18px;">****</span>
                                    <router-link :to="{path:'/myGold'}" class="flex flex-direction align-center">
                                        <span class="goGlodDetails text-xs text-gray">详情</span>
                                    </router-link>
                                </div>
                            </div>
                            <router-link :to="{path:'/login'}" class="flex flex-direction align-center" v-else>
                                <span class="logining text-df bg-orangeDark text-center">请先登陆/注册</span>
                            </router-link>
                        </div>
                        <!-- <div v-if="banner[0]">
                            <div class="banner bg-white" :style="'background: url('+banner[0].imgUrl+') center no-repeat;'"></div>
                        </div> -->
                        <!-- 公告 -->
                        <div class="notice margin-tb-sm flex flex-row align-center">
                            <img class="notice-icon fl" src="../../assets/images/notice-icon.png" alt="">
                            <SeamleScroll :noticeList="investList"/>
                        </div>
                        <div class="goldList" v-if="goodsData[0]">
                            <div class="goldList-item bg-white flex flex-row" v-for="(item,index) in goodsData[0].productList" :key="index" @click="toGoldDetail(item.id)">
                                <div class="cornerMarker flex flex-row align-center">
                                    <span class="dot bg-white"></span>
                                    <span class="markerTitle text-white">
                                        {{item.type==1?'新手活动':item.type==2?'活动产品':item.type==3?'流动金':item.type==4?'稳赢金':item.type==5?'闯关活动产品':item.type==6?'实物金':item.type==7?'体验金':item.type==8?'安稳金':item.type==9?'折扣金':''}}
                                    </span>
                                </div>
                                <div class="left">
                                    <img alt="" v-lazy="item.img">
                                </div>
                                <div class="right flex-sub">
                                    <div class="text-cut text-blackDark text-df title text-bold">{{item.name}}</div>
                                    <div class="text-cut_line_2 text-darkGray text-sm title-s">{{item.leaseDay.leaseDay}}日年化可达{{item.leaseDay.yearsIncome}}%</div>
                                    <div class="text-gray text-xs price">
                                        <span>{{item.specification.toFixed(2)}}克起购</span>
                                        <span class="line"></span>
                                        <span>期限{{item.leaseDay.leaseDay}}天起</span>
                                    </div>
                                </div>
                                <div class="buyBtn text-white text-sm text-center flex flex-row align-center justify-center" v-if="item.settingPriceType==2"><span class="text-lg margin-right-xs">{{item.sellingPrice.toFixed(2)}}</span>元/克</div>
                                <div class="buyBtn text-white text-sm text-center flex flex-row align-center justify-center" v-if="item.settingPriceType==1">
                                    <span class="text-xs">实时价</span>
                                    <span class="line margin-lr-xs"></span>
                                    <span class="text-lg margin-right-xs">{{item.sellingPrice.toFixed(2)}}</span>元/克
                                </div>
                            </div>
                        </div>
                        <div class="businessItroduction" v-if="investArea.businessShowTag==1">
                            <div class="text-blackDark text-df p">业务介绍</div>
                            <div>
                                <div class="business-item flex flex-row align-center text-darkGray" v-for="(item, index) in investArea.businessIntroductions" :key="index">
                                    <a :href="item.link" class="flex flex-row align-center">
                                        <div class="flex-sub text-sm">
                                            <span class="dot"></span>
                                            <span>{{item.title}}</span>
                                        </div>
                                        <div class="right">
                                            <img src="../../assets/images/right.png" alt="">
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="statistics flex flex-row align-center margin-top-sm">
                            <div class="msg text-center">
                                <div class="text-sm">累计已为用户管理黄金</div>
                                <div class="text-df" style="color: #3987EC;margin-top: 6px;">{{publicity.appTotalGoldGram | filterGoldGram(publicity.appTotalGoldGram)}}</div>
                            </div>
                            <div class="msg text-center">
                                <div class="text-sm">累计服务用户</div>
                                <div class="text-df" style="color: #3987EC;margin-top: 6px;">{{publicity.appTotalServeUser | filterServeUser(publicity.appTotalServeUser)}}</div>
                            </div>
                        </div>
                        <p class="text-sm text-center text-gray padding-bottom-xs">市场有风险，租赁需谨慎</p>
                        <p class="text-sm text-center text-gray">杭州xx融资租赁有限公司</p>
                    </div>
                </van-pull-refresh>
            </div>
        </div>
        <van-popup v-model="showLoginInfo" position="right" class="login-box" :safe-area-inset-bottom='true'>
            <div class="login-centent">
                <div class="login-centent-top">
                    <div class="flex flex-row align-center" v-if="bindCard==2">
                        <van-image round class="avater margin-right" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        <router-link :to="{path:'/bandCard'}" class="margin-left">
                            <div class="nobindCard text-center text-sm text-orangeDark">未实名绑卡</div>
                        </router-link>
                    </div>
                    <div class="flex flex-row align-center" v-if="bindCard==1">
                        <van-image round class="avater margin-right" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        <div class="flex-sub">
                            <p class="text-xl">{{loginName | changePhone(loginName)}}</p>
                            <p class="text-xs">
                                <img src="../../assets/images/smrz-icon.png" alt="" class="smrz-icon">
                                <span class="tis" :class="bindCard==1?'text-blue':'text-gray'">{{bindCard==1?'已实名':'未实名'}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="login-centent-middle van-hairline--bottom">
                    <div class="flex flex-row">
                        <div class="flex flex-direction align-center flex-sub">
                            <router-link :to="{path:'/goldenBeanCenter'}" class="flex flex-direction align-center">
                                <p class="text-blue text-xlx" v-if="goldenBeansInfo.usableBean==null||goldenBeansInfo.usableBean==''||goldenBeansInfo.usableBean==undefined">0</p>
                                <p class="text-blue text-xlx" v-else>{{goldenBeansInfo.usableBean}}</p>
                                <p class="text-sm">金豆</p>
                            </router-link>
                        </div>
                        <div class="flex flex-direction align-center flex-sub">
                            <router-link :to="{path:'/couponCenter'}" class="flex flex-direction align-center">
                                <p class="text-blue text-xlx" v-if="activityCouponMemberList.usablenessCoupons==null||activityCouponMemberList.usablenessCoupons==''||activityCouponMemberList.usablenessCoupons==undefined">0</p>
                                <p class="text-blue text-xlx" v-else>{{activityCouponMemberList.usablenessCoupons.length}}</p>
                                <p class="text-sm">优惠</p>
                            </router-link>
                        </div>
                        <div class="flex flex-direction align-center flex-sub">
                            <router-link :to="{path:'/myGold'}" class="flex flex-direction align-center">
                                <p class="text-blue text-xlx" v-if="billNums.bills==null||billNums.bills==''||billNums.bills==undefined">0</p>
                                <p class="text-blue text-xlx" v-else>{{billNums.bills}}</p>
                                <p class="text-sm">黄金</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="cell-lists">
                    <van-cell is-link :to="{path:'/effectiveBill'}">
                        <template #title>
                            <img src="../../assets/images/tidan-icon.png" alt="" class="custom-title-icon vertical-middle" >
                            <span class="custom-title">生效提单<van-icon dot class="logindot" /></span>
                        </template>
                        <template #default>
                            <span class="custom-title text-blue">21</span>
                        </template>
                    </van-cell>
                    <van-cell is-link :to="{path:'/transactionPassword',query:{type: bindPayPassword==1?1:2}}">
                        <template #title>
                            <img src="../../assets/images/password-icon.png" alt="" class="custom-title-icon vertical-middle" >
                            <span class="custom-title">交易密码</span>
                        </template>
                        <template #default>
                            <span class="custom-title text-sm" :class="bindPayPassword==1?'text-blue':'text-orangeDark'">{{bindPayPassword==1?'已设置,去修改':'未设置'}}</span>
                        </template>
                    </van-cell>
                    <van-cell is-link :to="{path:'/bandCard'}">
                        <template #title>
                            <img src="../../assets/images/tidan-icon.png" alt="" class="custom-title-icon vertical-middle" >
                            <span class="custom-title">绑定银行卡</span>
                        </template>
                        <template #default>
                            <span class="custom-title text-sm" :class="bindCard==1?'text-blue':'text-orangeDark'">{{bindCard==1?'已绑卡':'去实名绑卡'}}</span>
                        </template>
                    </van-cell>
                    <van-cell is-link :to="{path:'/addressList'}">
                        <template #title>
                            <img src="../../assets/images/tidan-icon.png" alt="" class="custom-title-icon vertical-middle" >
                            <span class="custom-title">收货地址</span>
                        </template>
                    </van-cell>
                    <van-cell is-link :to="{path:'/helpCenter'}">
                        <template #title>
                            <img src="../../assets/images/tidan-icon.png" alt="" class="custom-title-icon vertical-middle" >
                            <span class="custom-title">帮助中心</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <img src="../../assets/images/tidan-icon.png" alt="" class="custom-title-icon vertical-middle" >
                            <span class="custom-title" @click="outLogin" style="color: #d8d8d8;">退出登陆</span>
                        </template>
                    </van-cell>
                </div>
            </div>    
        </van-popup>
    </div>
</template>

<script>
    import SeamleScroll from '@/components/SeamleScroll'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    import { mapState,mapMutations } from 'vuex'

    export default {
        name: 'goldShop',
        components: {
            SeamleScroll
        },
        props:{
            goldenBeansInfo:{
                type: Object
            },
            billNums:{
                type: Object
            },
            activityCouponMemberList:{
                type: Object
            },
        },
        data() {
            return {
                banner: {},
                showGoldNum: false,
                showLoginInfo: false,
                isBackground: false,
                isLoading: false,
                goodsData: {},
                investList: [],
                publicity: {},
                investArea: {},
                noticeList: []
            }
        },
        computed: {
            ...mapState({
                accessToken: state => state.user.accessToken,
                mobile: state => state.user.mobile,
                loginName: state => state.user.loginName,
                mobile: state => state.user.mobile,
                bindCard: state => state.user.bindCard,
                bindAddress: state => state.user.bindAddress,
                bindPayPassword: state => state.user.bindPayPassword,
            }),
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
                await this.getBannersByChannel('m-index-top');
                await this.queryInvestProduct();
                await this.findInvestList();
                await this.publicityQuery();
                await this.getInvestArea();
                this.isLoading = false;
            },
            // 获取各个部位的banner
            async getBannersByChannel(position) {
                let data = await this.$api.getBannersByChannel('',position);
                this.banner = data;
            },
            // 业务介绍
            async getInvestArea() {
                let data = await this.$api.getInvestArea();
                this.investArea = data;
            },
            // 累计已为用户管理黄金
            async publicityQuery() {
                let data = await this.$api.publicityQuery();
                this.publicity = data;
            },
            // 投资动态列表
            async findInvestList() {
                let data = await this.$api.findInvestList();
                this.investList = data;
            },
            // 查询黄金投资-产品展示区产品列表
            async queryInvestProduct() {
                let data = await this.$api.queryInvestProduct();
                this.goodsData = data;
            },
            async onRefresh() {
                await this.info();
                this.isLoading = false;
            },
            // 显示换金
            clickShowGoldNum() {
                this.showGoldNum = !this.showGoldNum;
            },
            loginInfo() {
                this.showLoginInfo = true;
            },
            // 登出
            outLogin() {
                this.$store.dispatch('user/logout').then(() => {
                    this.$notify({ type: 'success', message: '登出成功！' });
                    location.reload() // 为了重新实例化vue-router对象 避免bug
                }).catch(() => {
                })
            },
            goBack() {
                this.$router.go(-1)
            },
            toGoldDetail(id) {
                this.$router.push({path:'/goldDetail', query: {id: id}})
            }
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
</style>
<style lang="scss" scoped>
    .shop {
        .header {
            background: transparent !important;
        }
        .bg {
            overflow: hidden;
            width: 100%;
            height: 203px;
            background: linear-gradient(180deg,rgba(189,211,255,1) 0%,rgba(57,135,236,1) 100%);
            span {
                display: block;
                height: 28px;
                font-weight: 500;
                line-height: 28px;
                margin-top: 80px;
            }
        }
        .login-box {
            width: 264px;
            height: 100%;
            .login-centent {
                .login-centent-top {
                    padding: 41px 20px 46px 20px;
                    .avater {
                        width: 44px;
                        height: 44px;
                    }
                    .nobindCard {
                        width:90px;
                        height:29px;
                        line-height:29px;
                        border-radius:4px;
                        border:1px solid var(--orangeDark);
                    }
                    .tis {
                        display: inline-block;
                        transform: scale(0.83,0.83);
                        transform-origin: 0 12px;
                    }
                    .smrz-icon {
                        width: 8px;
                        height: 8px;
                        margin-right: 4px;
                    }
                }
                .login-centent-middle {
                    padding: 10px 0 41px 0;
                }
                .cell-lists {
                    .logindot {
                        .van-info.van-info--dot {
                            background-color: var(--orangeDark);
                            top: -5px;
                            right: -7px;
                        }
                    }
                    .custom-title-icon {
                        width: 16px;
                        height: 16px;
                        margin-right: 8px;
                    }
                }
            }
        }
        .blue {
            background: #b4cdfd !important;
        }
        .content {
            padding-bottom: 25px;
            .box {
                height: 160px;
                border-radius: 4px;
                margin-top: -50px;
                .logining {
                    width:115px;
                    height:32px;
                    line-height:32px;
                    border-radius:4px;
                    padding: 0;
                }
                .icon_eye {
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                    margin-left: 10px;
                }
                .goGlodDetails {
                    border-radius:8px;
                    border:1px solid rgba(197,197,197,1);
                    height: 18px;
                    padding: 0 6px;
                }
            }
        }
        .banner {
            background-size: 100% 100% !important;
            border-radius:4px;
            height: 84px;
        }
        .notice {
            background:rgba(241,241,241,1);
            height: 22px;
            .notice-icon {
                width: 9px;
                height: 9px;
                margin: 2px 14px 0 6px;
            }
        }
        .goldList {
            .goldList-item {
                position: relative;
                height: 180px;
                border-radius:4px;
                margin-bottom: 12px;
                padding-right: 12px;
                padding-left: 12px;
                padding-top: 14px;
                padding-bottom: 16px;
                .cornerMarker {
                    position: absolute;
                    left: -4px;
                    top: 16px;
                    width: 56px;
                    height: 16px;
                    background: var(--blue);
                    box-shadow: 1px 2px 1px 0px rgba(0,0,0,0.14);
                    border-radius: 0px 100px 100px 0px;
                    .dot {
                        display: inline-block;
                        width: 3px;
                        height: 3px;
                        margin-left: 5px;
                        margin-right: 3px;
                        border-radius: 100%;
                    }
                    .markerTitle {
                        font-size: 11px;
                        font-weight: 400;
                    }
                }
                .left {
                    img {
                        width: 124px;
                        height: 124px;
                        margin-top: 14px;
                    }
                    margin-right: 12px;
                }
                .right {
                    width: 194px;
                    .title {
                        height: 20px;
                        line-height: 20px;
                        margin-bottom: 4px;
                    }
                    .title-s {
                        line-height: 16px;
                        margin-bottom: 6px;
                    }
                    .price {
                        height:14px;
                        line-height:14px;
                        .line {
                            width: 1px;
                            height: 10px;
                            background: rgba(216,216,216,1);
                            margin: 0 8px;
                            display: inline-block;
                        }
                    }
                }
                .buyBtn {
                    position: absolute;
                    right: 12px;
                    bottom: 16px;
                    min-width: 147px;
                    height: 28px;
                    padding: 0 10px;
                    background: var(--blue);
                    border-radius: 14px;
                    .line {
                        display: inline-block;
                        width:1px;
                        height:18px;
                        background:rgba(255,255,255,1);
                        vertical-align: sub;
                    }
                }
            }
        }
        .businessItroduction {
            .p {
                margin-top: 18px;
                margin-bottom: 6px;
            }
            .business-item {
                height: 38px;
                border-bottom: 1px solid #C5C5C5;
                a {
                    width: 100%;
                }
                .dot {
                    width: 4px;
                    height: 4px;
                    background: var(--blue);
                    display: inline-block;
                    border-radius: 100%;
                    margin-right: 6px;
                    vertical-align: middle;
                }
                .right {
                    width: 7px;
                    height: 9px;
                    img {
                        width: 100%;
                        height: 100%;
                        display: inherit;
                    }
                }
                &:last-child {
                    border: 0;
                }
            }
        }
        .statistics {
            margin-bottom: 50px;
            .msg {
                padding: 8px 0;
                width: 160px;
                height: 66px;
                background: rgba(241,241,241,1);
                border-radius: 4px;
                margin-right: 10px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
</style>