<template>
    <div class="goldDetail dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-gradual-blue" @click-left='goBack()' :border='false'>
                    <template #left>
                        <img src="../../assets/images/bai-back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">{{goldDetail.name}}</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier" :class="goldDetail.settingPriceType==1?'margin-bottom1':'margin-bottom2'">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功" head-height='50'>
                    <template #loading>
                        <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                    </template>
                    <div class="content">
                        <div class="bg text-white">
                            <div class="text-center text-df sellingPrice">
                                <span class="text-sxxxl" style="margin-right: 4px;" v-if='sellingPrice'>
                                    <countTo ref="countTo1" :startVal='startVal' :endVal='sellingPrice' :duration='4000' :decimals='2'></countTo>
                                </span>元/克
                            </div>
                            <div class="text-center text-sm text-through margin-bottom" v-if='marketPrice'>市场价<span class="text-price">{{marketPrice}}</span></div>
                            <div class="userRed bg-white flex flex-row align-center" v-if="goldDetail.type!=9&&activityCouponNums>0">
                                <img src="../../assets/images/youhui.png" alt="">
                                <span class="text-orangeDark text-sm">你有黄金红包可用</span>
                            </div>
                            <div class="unUserRed bg-white flex flex-row align-center" v-if="goldDetail.type!=9&&activityCouponNums<=0">
                                <img src="../../assets/images/youhui-dis.png" alt="">
                                <span class="text-darkGray text-sm">无可用优惠</span>
                            </div>
                        </div>
                        <div class="goodsInfo margin-lr padding-lr-sm padding-top-sm bg-white">
                            <div class="goodsInfo-top flex flex-row padding-bottom-lg van-hairline--bottom">
                                <div class="left-img">
                                    <img :src="goldDetail.img" alt="">
                                </div>
                                <div class="right-msg flex-sub" style="width: 248px;">
                                    <div class="text-lg fbt text-cut">{{goldDetail.subhead}}</div>
                                    <div class="flex flex-row justify-between text-sm">
                                        <span class="text-blackDark" v-if='goldDetail.gramMin'>{{goldDetail.gramMin.toFixed(2)}}克起购</span>
                                        <span class="text-darkGray" v-if='stockspecification'>库存克重:{{stockspecification}}克</span>
                                    </div>
                                    <div class="icon text-darkGray">
                                        <span class="text-xs" v-for="(item,index) in goldDetail.labelList" :key="index"><img :src="item.url" alt=""><span class="apsn1">{{item.name}}</span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="padding-top-lg">
                                <div class="text-df margin-bottom-sm text-blackDark">基本信息</div>
                                <div class="flex flex-row text-sm margin-bottom-xs">
                                    <div class="flex-sub">
                                        <span class="text-blackDark margin-right-sm">规格</span>
                                        <span class="text-darkGray">{{goldDetail.specification}}g</span>
                                    </div>
                                    <div class="flex-sub">
                                        <span class="text-blackDark margin-right-sm">分类</span>
                                        <span class="text-darkGray">{{goldDetail.type==1?'新手活动':goldDetail.type==2?'活动产品':goldDetail.type==3?'流动金':goldDetail.type==4?'稳赢金':goldDetail.type==5?'闯关活动产品':goldDetail.type==6?'实物金':goldDetail.type==7?'体验金':goldDetail.type==8?'安稳金':goldDetail.type==9?'折扣金':''}}</span>
                                    </div>
                                </div>
                                <div class="flex flex-row text-sm margin-bottom-xs">
                                    <div class="flex-sub">
                                        <span class="text-blackDark margin-right-sm">最低购买</span>
                                        <span class="text-darkGray">{{goldDetail.gramMin}}g</span>
                                    </div>
                                    <div class="flex-sub">
                                        <span class="text-blackDark margin-right-sm">加工费</span>
                                        <span class="text-darkGray">{{goldDetail.processingFee}}</span>
                                    </div>
                                </div>
                                <div class="flex flex-row text-sm margin-bottom-xs">
                                    <div class="flex-sub">
                                        <span class="text-blackDark margin-right-sm">库存</span>
                                        <span class="text-darkGray">{{goldDetail.stock}}</span>
                                    </div>
                                    <div class="flex-sub">
                                        <span class="text-blackDark margin-right-sm">库存克重</span>
                                        <span class="text-darkGray" v-if="stockspecification">{{stockspecification}}g</span>
                                    </div>
                                </div>
                                <div class="flex flex-row text-sm padding-bottom-lg van-hairline--bottom">
                                    <div class="flex-sub">
                                        <span class="text-blackDark margin-right-sm">限购时间</span>
                                        <span class="text-darkGray">{{goldDetail.upDay}}~{{goldDetail.stopDay}}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="padding-tb-lg van-hairline--bottom">
                                <div class="text-df margin-bottom-sm text-blackDark">回租期限</div>
                                <div class="table">
                                    <div class="tHeader text-sm text-white flex flex-row align-center">
                                        <span class="tHeaderSpan flex-sub text-center">租赁期限（天）</span>
                                        <span class="tHeaderSpan flex-sub text-center">预期年化收益率</span>
                                    </div>
                                    <div class="tBody">
                                        <div class="tBody-item" v-for="(item,index) in goldDetail.leaseDayList" :key="index">
                                            <div class="text-sm text-blue flex flex-row align-center">
                                                <span class="tBodySpan flex-sub text-center">{{item.leaseDay}}</span>
                                                <span class="tBodySpan flex-sub text-center">{{item.yearsIncome.toFixed(2)}}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="padding-tb-lg van-hairline--bottom">
                                <div class="text-df margin-bottom-sm text-blackDark">计息方案</div>
                                <div class="text-darkGray text-sm" style="margin-bottom: 8px;">
                                    <span class="margin-right-sm text-blackDark">计息方式</span>{{goldDetail.interestAccrualType==1?'按天计息':'到期计息'}}
                                </div>
                                <div class="text-darkGray text-sm">
                                    <span class="margin-right-sm text-blackDark">计息时间</span>租赁成功日起T+1
                                </div>
                            </div>
                            <div class="padding-tb-lg">
                                <div class="text-df margin-bottom-sm text-blackDark">租赁到期实物金处置</div>
                                <div class="text-darkGray text-sm">租赁到期后，可自主选择出售给平台、提取实物金或续租</div>
                            </div>
                        </div>
                        <van-tabs v-model="activeName" scrollspy sticky color='#3987ec' offset-top='48' :border='false' background='#F7F7F7'>
                            <van-tab title="产品详情">
                                <div class="margin-top" style="overflow: hidden;">
                                    <img v-for="(item,index) in goldDetail.imgDetails" :key="index" :src="item" alt="" width="100%" class="fl">
                                </div>
                            </van-tab>
                            <van-tab title="安全保障">
                                <div class="divider flex flex-row align-center justify-center padding-top-lg padding-bottom-sm">
                                    <span class="lines1"></span>
                                    <span class="text-gray text-sm margin-lr-xs">安全保障</span>
                                    <span class="lines2"></span>
                                </div>
                                <iframe id="show-iframe" frameborder="0" scrolling="no" class="iframeHeight" style="background-color:transparent;width: 100%;" src='http://h5.mayihuangjin.com:89/app-h5/safety_guarantee/app_index.html'></iframe>
                            </van-tab>
                            <van-tab title="历史购买">
                                <div class="divider flex flex-row align-center justify-center padding-top-lg padding-bottom-sm">
                                    <span class="lines1"></span>
                                    <span class="text-gray text-sm margin-lr-xs">历史购买</span>
                                    <span class="lines2"></span>
                                </div>
                                <div class="padding-lr historicalBuy">
                                    <div class="flex flex-row text-sm text-center historicalBuy-header">
                                        <div class="flex-sub">购买用户</div>
                                        <div class="flex-sub">购买克重</div>
                                        <div class="flex-sub">购买金价</div>
                                    </div>
                                    <div class="historicalBuy-item flex flex-row text-sm text-center margin-bottom-sm bg-white" v-for="(item,index) in payRecordsList.dataList" :key="index">
                                        <div class="flex-sub text-blackDark">{{item.mobile | changePhone(item.mobile)}}</div>
                                        <div class="flex-sub text-blackDark">{{item.totalGram}}g</div>
                                        <div class="flex-sub text-blackDark">{{item.goldPrice}} 元/克</div>
                                    </div>
                                    <div class="noPayRecordsList" v-if="payRecordsList.dataList">
                                        <div v-if="payRecordsList.dataList.length==0" class="text-center">
                                            <img src="../../assets/images/noBuyjl.png" alt="">
                                            <div class="text-center text-xs text-gray margin-bottom-lg">无任何记录~</div>
                                        </div>
                                    </div>
                                </div>
                            </van-tab>
                            <van-tab title="常见问题">
                                <div>
                                    <van-count-down :time="60000" millisecond :auto-start="false" format="DD 天 HH 时 mm 分 ss 秒"></van-count-down>
                                </div>
                            </van-tab>
                        </van-tabs>
                    </div>
                </van-pull-refresh>
            </div>
        </div>
        <div class="buy-box bg-white">
            <div class="tips text-orangeDark text-sm" v-if="goldDetail.settingPriceType==1">
                该产品的价格为实时价，具体以支付时的价格为准
            </div>
            <div class="buy-centent">
                <div class="flex flex-row align-center justify-between">
                    <div class="flex flex-row align-center">
                        <div class="text-sm text-darkGray margin-right-sm">预计支付</div>
                        <!-- <div class="text-sm text-gray margin-right-sm">预计支付</div> -->
                        <div class="text-price text-orangeDark text-xxl">
                            <countTo ref="countTo2" :startVal='startVal' :endVal='subtotalPrice' :duration='4000' :decimals='2'></countTo>
                        </div>
                        <!-- <div class="text-price text-gray text-xxl">
                            <countTo ref="countTo2" :startVal='startVal' :endVal='subtotalPrice' :duration='4000' :decimals='2'></countTo>
                        </div> -->
                    </div>
                    <div class="buyBtn bg-blue text-df text-center" @click="buy()">立即购买</div>
                    <!-- <div class="buyBtn bg-gray text-df text-center">已售罄</div> -->
                </div>
            </div>
        </div>
        <van-popup v-model="showLogin">
            <div class="showLoginbox">
                <p class="showLoginbox-tip text-lg text-blackDark text-bold text-center">请先登陆/注册</p>
                <div class="showLoginbox-btn text-df text-white text-center" @click="toLogin">立即登陆/注册</div>
            </div>
        </van-popup>
        <van-popup v-model="showBandCard">
            <div class="showBandCardbox">
                <p class="showLoginbox-tip text-lg text-blackDark text-bold text-center">请先完成实名绑卡</p>
                <div class="showBandCard-btns text-df text-white text-center">
                    <span class="bandCardlook text-darkGray margin-right-xs" @click="showBandCard=false">再看看</span>
                    <span class="bandCarding margin-left-xs" @click="toBandCard">立即绑卡</span>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import countTo from 'vue-count-to';
    import { mapState,mapMutations } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'

    export default {
        name: 'goldDetail',
        components: {
            countTo
        },
        props:{
        },
        data() {
            return {
                startVal: 0,
                sellingPrice: 0, // 当前金价
                marketPrice: '', // 市场金价
                activityCouponNums: 0,
                isBackground: false,
                isLoading: false,
                goldDetail: {},
                stockspecification: '',
                payRecordsList: {}, // 购买记录
                subtotalPrice: 0, // 支付金额
                activeName: 0,
                time: null,
                showLogin: false,
                showBandCard: false,
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
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.isBackground = scrollTop > 235 ? true : false;
            },
            async info() {
                this.isLoading = true;
                await this.productDetail();
                await this.payRecords();
                this.isLoading = false;
            },
            // 产品详情
            async productDetail() {
                let data = await this.$api.productDetail('',this.$route.query.id);
                this.goldDetail = data;
                this.stockspecification = Number(data.stock * data.specification).toFixed(2);
                this.subtotalPrice = Number(data.specification * data.sellingPrice);
                let marketPrice = '';
                if(data.settingPriceType==1) {
                    marketPrice = data.marketPrice + data.sellingPrice;
                    this.Djs_currentGoldPrice();
                }
                if(data.settingPriceType==2) {
                    marketPrice = data.marketPrice;
                }

                if(this.accessToken!=null&&this.accessToken!=''&&this.accessToken!=undefined) {
                    if(data.type==8&&data.type!=9) {
                        this.activityCouponNum(3);
                    }
                    if(data.type!=8&&data.type!=9) {
                        this.activityCouponNum(0);
                    }
                }
                
                this.marketPrice = marketPrice.toFixed(2);
                this.sellingPrice = Number(data.sellingPrice);
            },
            // 优惠券
            async activityCouponNum(type) {
                let params = {
                    type: type
                }
                let data = await this.$api.activityCouponNum(params,getCookie('accessToken'));
                this.activityCouponNums = data;
            },
            // 产品购买记录
            async payRecords() {
                let params = {
                    productId: this.$route.query.id,
                    pageNum: 1,
                    pageSize: 1000000
                }
                let data = await this.$api.payRecords(params,this.$route.query.id);
                this.payRecordsList = data;
            },
            // 实时金价方法
            async currentGoldPrice() {
                this.$refs.countTo1.start();
                this.$refs.countTo2.start();
                let data = await this.$api.currentGoldPrice();
                this.sellingPrice = Number(data);
                this.subtotalPrice = Number(this.goldDetail.specification * data);
            },
            // 实时金价
            Djs_currentGoldPrice() {
                this.time = setInterval(()=> {
                    this.currentGoldPrice();
                }, 10000);
            },
            // 购买
            buy() {
                if(this.accessToken==null||this.accessToken==''||this.accessToken==undefined) {
                    this.showLogin = true;
                    return
                }
                if(this.bindCard!=1) {
                    this.showBandCard = true;
                    return
                }
                this.$router.push({path: '/confirmOrder'})
            },
            goBack() {
                this.$router.go(-1)
            },
            toLogin() {
                this.$router.push({path: '/login' ,query: {url:location.hostname}})
            },
            toBandCard() {
                this.$router.push({path: '/bandCard' ,query: {url:location.hostname}})
            },
            async onRefresh() {
                await this.info();
            },
        },
        beforeDestroy () {
            clearInterval(this.time);
        }
    }
</script>
<style lang="scss">
    .goldDetail {
        .van-tab.van-tab--active {
            color: var(--blue);
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
    // -webkit-box-reflect: below 5px -webkit-linear-gradient(transparent 64%,rgba(0,0,0,.8));
    // box-reflect: below 5px linear-gradient(transparent 60%,rgba(0,0,0,.8));
</style>
<style lang="scss" scoped>
    .goldDetail {
        .header-bg {
            background: #fff !important;
        }
        .margin-bottom1 {
            margin-bottom: 72px;
        }
        .margin-bottom2 {
            margin-bottom: 48px;
        }
        .iframeHeight {
            height: 1620px;
        }
        .contaier {
            .content {
                .bg {
                    overflow: hidden;
                    width: 100%;
                    height: 207px;
                    background: url('../../assets/images/goldDetail-bg.png') top center no-repeat;
                    background-size: 100% 100%;
                    .sellingPrice {
                        margin-top: 40px;
                    }
                    .userRed,.unUserRed {
                        height: 30px;
                        border-radius: 15px;
                        margin: 0 auto;
                        img {
                            width: 40px;
                            height: 21px;
                            margin-left: 4px;
                            margin-right: 10px;
                        }
                    }
                    .userRed {
                        width: 180px;
                    }
                    .unUserRed {
                        width:150px;
                    }
                }
                .goodsInfo {
                    margin-top: -20px;
                    margin-bottom: 8px;
                    border-radius:4px;
                    .goodsInfo-top {
                        .left-img {
                            width: 80px;
                            height: 80px;
                            margin-right: 12px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .right-msg {
                            .fbt {
                                height: 22px;
                                line-height: 22px;
                                margin-bottom: 6px;
                            }
                            .icon {
                                margin-top: 17px;
                                line-height: 14px;
                                span {
                                    display: inline-block;
                                    &:last-child {
                                        margin-right: 0;
                                    }
                                }
                                .apsn1 {
                                    transform: scale(0.83,0.83);
                                    transform-origin: 0 12px;
                                }
                                img {
                                    width: 12px;
                                    height: 12px;
                                    vertical-align: middle;
                                    margin-right: 4px;
                                }
                            }
                        }
                    }
                    .table {
                        background: rgba(235,243,253,1);
                        border-radius: 4px;
                        .tHeader {
                            height:27px;
                            background: rgba(57,135,236,1);
                            border-radius: 4px 4px 0px 0px;
                            .tHeaderSpan {
                                height: 23px;
                                line-height: 25px;
                                border-right: 1px solid var(--white);
                                &:last-child {
                                    border-right: 0;
                                }
                            }
                        }
                        .tBody {
                            padding: 0 2px;
                            .tBody-item {
                                height: 29px;
                                .tBodySpan {
                                    height: 29px;
                                    line-height: 29px;
                                    border-right: 1px solid var(--blue);
                                    border-bottom: 1px solid var(--blue);
                                    &:last-child {
                                        border-right: 0;
                                    }
                                }
                                &:last-child {
                                    .tBodySpan {
                                        border-bottom: 0;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .divider {
                height: 47px;
                .lines1 {
                    display: inline-block;
                    width:43px;
                    height:1px;
                    background:linear-gradient(270deg,rgba(197,197,197,1) 0%,rgba(247,247,247,1) 100%);
                }
                .lines2 {
                    display: inline-block;
                    width:43px;
                    height:1px;
                    background:linear-gradient(270deg,rgba(247,247,247,1) 0%,rgba(197,197,197,1) 100%);
                }
            }
            .historicalBuy {
                .historicalBuy-header {
                    height: 40px;
                    line-height: 40px;
                }
                .historicalBuy-item {
                    height: 31px;
                    line-height: 31px;
                    border-radius: 4px;
                }
                .noPayRecordsList {
                    img {
                        width: 247px;
                        height: 119px;
                        margin-bottom: 8px;
                    }
                }
            }
        }
        .buy-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            box-shadow: 0px 0px 9px 0px var(--blackShadow);
            .tips {
                height: 24px;
                line-height: 24px;
                background:rgba(254,243,236,1);
                padding: 0 14px;
            }
            .buy-centent {
                padding: 0 12px 0 14px;
                height: 48px;
                line-height: 48px;
                .buyBtn {
                    width: 93px;
                    height: 36px;
                    line-height: 36px;
                    border-radius: 18px;
                }
            }
        }
        .van-popup {
            border-radius: 4px;
        }
        .showLoginbox,.showBandCardbox {
            width: 300px;
            height: 188px;
            overflow: hidden;
            .showLoginbox-tip {
                height:22px;
                line-height: 22px;
                margin: 52px 0 50px 0;
            }
            .showLoginbox-btn {
                width:133px;
                height:36px;
                line-height: 36px;
                background:rgba(57,135,236,1);
                border-radius:18px;
                margin: 0 auto;
            }
            .showBandCard-btns {
                .bandCardlook {
                    display: inline-block;
                    width:133px;
                    height:36px;
                    line-height: 36px;
                    border:1px solid rgba(110,110,110,1);
                    border-radius:18px;
                }
                .bandCarding {
                    display: inline-block;
                    width:133px;
                    height:36px;
                    line-height: 36px;
                    background:rgba(57,135,236,1);
                    border-radius:18px;
                }
            }
        }
    }
</style>