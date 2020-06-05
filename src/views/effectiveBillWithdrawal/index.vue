<template>
    <div class="effectiveBillWithdrawal dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-blackDark text-df text-bold">提金确认</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier">
            <div class="content padding-lr">
                <div class="item bg-white margin-bottom-sm">
                    <div class="product flex flex-row">
                        <img class="productPicture" src="http://cdn.mayihuangjin.com/FssdCR3hJ2qig6683gBA-UGBrfP3?800/800" alt="">
                        <div class="flex-sub">
                            <div class="product-title text-blackDark text-sm text-cut_line_2">投资金条AU99.99产品投资金条投资金条投资金条投金投资金条AU99.99产品投资金条投资金条投资金条投金条</div>
                            <div class="product-gar text-darkGray text-sm">克重 20.22克</div>
                            <div class="product-price text-orangeDark text-sm">购入金价 380.66元/克</div>
                        </div>
                    </div>
                </div>
                <div class="item bg-white margin-bottom-sm" v-if="showMethodWithdrawalRadio=='1'">
                    <van-cell is-link @click="showMethodWithdrawal=true">
                        <template #title>
                            <span class="text-sm text-blackDark">提金方式</span>
                        </template>
                        <template #default>
                            <span class="text-xs text-darkGray">快递寄送</span>
                        </template>
                    </van-cell>
                    <van-cell is-link>
                        <template #title>
                            <span class="text-sm text-blackDark">配送方式</span>
                        </template>
                        <template #default>
                            <span class="text-xs text-darkGray">快递运输(顺丰)</span>
                        </template>
                    </van-cell>
                </div>
                <div class="item bg-white margin-bottom-sm" v-if="showMethodWithdrawalRadio=='1'">
                    <van-cell is-link>
                        <template #title>
                            <img class="iconimg vertical-middle" src="../../assets/images/people.png" alt="">
                            <span class="text-sm text-blackDark text-bold margin-left-sm">收件人</span>
                            <span class="text-sm text-blackDark text-bold margin-left-sm">182*****954</span>
                        </template>
                        <template #default>
                            <span class="text-xs text-darkGray">修改</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <div class="flex flex-row">
                                <img class="iconimg vertical-middle" src="../../assets/images/truck.png" alt="">
                                <span class="text-sm text-darkGray margin-left-sm" style="line-height:16px;">浙江省杭州市拱墅区都市随想水情缘12幢2单元502-1浙江省杭州市拱墅区都市随想水情缘12幢2单元502-1</span>
                            </div>
                        </template>
                    </van-cell>
                </div>

                <div class="item bg-white margin-bottom-sm" v-if="showMethodWithdrawalRadio=='2'">
                    <van-cell is-link @click="showMethodWithdrawal=true">
                        <template #title>
                            <span class="text-sm text-blackDark">提金方式</span>
                        </template>
                        <template #default>
                            <span class="text-xs text-darkGray">门店自提</span>
                        </template>
                    </van-cell>
                    <van-cell is-link>
                        <template #title>
                            <span class="text-sm text-blackDark">商品门店</span>
                        </template>
                        <template #default>
                            <span class="text-xs text-darkGray">应宏金行</span>
                        </template>
                    </van-cell>
                    <div class="store margin-lr-sm margin-bottom-sm padding-lr-sm">
                        <div class="overflowHidden">
                            <span class="fl text-xs text-darkGray"><img src="../../assets/images/phone.png" alt=""> 0571-8785623</span>
                            <span class="fr text-xs text-darkGray"><img src="../../assets/images/time.png" alt=""> 工作日、双休日与假日均营业</span>
                        </div>
                        <div class="text-xs text-darkGray"><img src="../../assets/images/address.png" alt=""> 浙江省杭州市拱墅区都市随想水情缘12幢2单元502-1</div>
                    </div>
                </div>
                <div class="item bg-white margin-bottom-sm" v-if="showMethodWithdrawalRadio=='2'">
                    <van-cell is-link>
                        <template #title>
                            <span class="text-sm text-blackDark">联系人</span>
                            <span class="text-sm text-blackDark text-bold margin-left-sm">刘彦军</span>
                        </template>
                        <template #default>
                            <span class="text-xs text-darkGray">修改</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">联系电话</span>
                            <span class="text-sm text-blackDark text-bold margin-left-sm">15088884444</span>
                        </template>
                    </van-cell>
                </div>
                
                <div class="item bg-white margin-bottom-sm">
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">待提克重</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">20克</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">加工费</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">6.00元</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">运输费</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">12.00元</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">应支付金额</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-blue">18.00元</span>
                        </template>
                    </van-cell>
                </div>
            </div>
        </div>
        <div class="fixed-box bg-white padding-lr flex flex-row align-center justify-end">
            <div class="margin-right-lg text-right">
                <div class="text-sm text-blue">待提克重20克</div>
                <div class="text-sm text-blackDark text-bold">应付款 ￥18.00</div>
            </div>
            <div class="buyBtn bg-blue text-df text-center" @click="showConfirmWithdrawalFn">确认提金</div>
        </div>
        <!-- 选择提金方式弹框 -->
        <van-popup v-model="showMethodWithdrawal" round position="bottom" class="popupMethodWithdrawal" :style="{ height: '190px' }">
            <div class="showMethodWithdrawal-title text-df text-center">提金方式</div>
            <div class="showMethodWithdrawal-centent">
                <van-radio-group v-model="showMethodWithdrawalRadio">
                    <van-cell-group>
                        <van-cell clickable  @click="radio = '1'">
                            <template #title>
                                <span>快递寄送</span>
                            </template>
                            <template #right-icon>
                                <van-radio name="1" />
                            </template>
                        </van-cell>
                        <van-cell clickable  @click="radio = '2'">
                            <template #title>
                                <span>门店自提</span>
                            </template>
                            <template #right-icon>
                                <van-radio name="2" />
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
            </div>
            <div class="showMethodWithdrawalBtn bg-blue text-center text-df" @click="confirmMethodWithdrawal">确定</div>
        </van-popup>
        <!-- 确认提金弹框 -->
        <van-popup v-model="showConfirmWithdrawal" class="popupConfirmWithdrawal" :style="{width: '300px', height: '188px' }">
            <div class="showConfirmWithdrawal-centent text-df padding-lr-lg">
                提金申请后，你的提单将进入冻结状态，无法执行其他操作，如需取消申请，你可以在下单后的48小时内，在提金订单页面手动取消，确认继续？
            </div>
            <div class="showConfirmWithdrawalBtn text-center text-df">
                <span class="qr text-blue margin-right-sm" @click="confirmWithdrawal">确认</span>
                <span class="qx bg-blue text-white" @click="showConfirmWithdrawal=false">取消</span>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'effectiveBillWithdrawal',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                showMethodWithdrawal: false,
                showMethodWithdrawalRadio: '1',
                showConfirmWithdrawal: false,
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
            confirmMethodWithdrawal() {
                this.showMethodWithdrawal = false;
            },
            showConfirmWithdrawalFn() {
                this.showConfirmWithdrawal = true;
            },
            confirmWithdrawal() {
                this.showConfirmWithdrawal = false;
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
    .effectiveBillWithdrawal {
        .van-popup--bottom.van-popup--round {
            border-radius:4px 4px 0px 0px;
        }
        .van-cell__right-icon {
            font-size: 12px;
        }
    }
</style>
<style lang="scss" scoped>
    .effectiveBillWithdrawal {
        .header {
        }
        .content {
            padding-bottom: 48px;
            overflow: hidden;
        }
        .van-cell {
            padding: 5px 10px;
        }
        .van-cell:not(:last-child)::after {
            border-bottom: 0;
        }
        .item {
            overflow: hidden;
            border-radius:4px;
            .product {
                height: 115px;
                padding: 8px;
                .productPicture {
                    width: 99px;
                    height: 99px;
                    margin-right: 8px;
                }
                .product-title {
                    margin-top: 12px;
                    margin-bottom: 5px;
                }
                .product-gar {
                    height: 17px;
                    line-height: 17px;
                    margin-bottom: 2px;
                }
                .product-price {
                    height: 17px;
                    line-height: 17px;
                }
            }
            .iconimg {
                width: 16px;
                height: 16px;
            }
        }
        .overflowHidden {
            height: 14px;
            line-height: 14px;
            margin-bottom: 6px;
        }
        .store {
            background:#EBF3FD;
            padding-top: 8px;
            padding-bottom: 8px;
            position: relative;
            &:before{
               content: "";
               width: 0px;
               height: 0px;
               border-left: 6px solid transparent;
               border-right: 6px solid transparent;
               border-bottom: 6px solid #EBF3FD;
               position: absolute;
               top: -6px;
               right: 40px;
            }
            img {
                width: 10px;
                height: 10px;
            }
            span {
                display: inline-block;
            }
        }
        .fixed-box {
            box-shadow: 0 -3px 10px #f1f1f1;
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            .buyBtn {
                width:93px;
                height:36px;
                line-height:36px;
                border-radius:18px;
            }
        }
        .popupConfirmWithdrawal {
            border-radius: 4px;
            .showConfirmWithdrawal-centent {
                height: calc(100% - 60px - 36px - 10px);
                padding: 0 15px;
                margin-top: 28px;
            }
            .showConfirmWithdrawalBtn {
                height:36px;
                line-height: 36px;
                margin-top: 30px;
                .qr {
                    display: inline-block;
                    width:133px;
                    height:36px;
                    border-radius:18px;
                    border:1px solid rgba(57,135,236,1);
                }
                .qx {
                    display: inline-block;
                    width:133px;
                    height:36px;
                    border-radius:18px;
                }
            }
        }
        .popupMethodWithdrawal {
            .showMethodWithdrawal-title {
                height: 60px;
                line-height: 60px;
            }
            .showMethodWithdrawal-centent {
                height: calc(100% - 60px - 36px - 10px);
                padding: 0 15px;
            }
            .showMethodWithdrawalBtn {
                position: absolute;
                left: 15px;
                bottom: 5px;
                width:345px;
                height:36px;
                line-height: 36px;
                border-radius:18px;
                margin: 0 auto;
            }
        }
    }
</style>