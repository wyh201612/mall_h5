<template>
    <div class="exchangeGoodsDetails dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                </van-nav-bar>
            </div>
            <div style="margin-bottom: 48px;">
                <div class="content">
                    <img :src="giftDetails.imgUrl" alt="" class="pic fl">
                    <div class="flex flex-direction padding-lr bg-white">
                        <div class="flex flex-row align-center justify-between" style="height: 36px;">
                            <div>
                                <span class="text-sxl text-orangeDark text-bold">{{giftDetails.price}}</span>
                                <span class="text-orangeDark text-sm">金豆</span>
                                <span class="text-sm margin-left text-through text-gray text-price">{{giftDetails.marketPrice}}</span>
                            </div>
                            <div class="text-sm text-gray">库存<span class="margin-left-xs">{{giftDetails.balance}}</span></div>
                        </div>
                        <div class="text-cut_line_2 text-df padding-bottom-sm">{{giftDetails.giftName}}</div>
                    </div>
                    <div class="flex flex-direction padding-lr bg-white margin-top-sm">
                        <div class="margin-bottom margin-top" style="height: 18px;line-height: 18px;"><span class="text-df text-blackDark">礼品介绍</span><img src="../../assets/images/dot.png" alt="" class="dot"></div>
                        <p class="text-xs text-darkGray margin-bottom">{{giftDetails.introduction}}</p>
                    </div>
                    <div class="flex flex-direction padding-lr bg-white margin-tb-sm">
                        <div class="margin-bottom margin-top" style="height: 18px;line-height: 18px;"><span class="text-df text-blackDark">详细说明</span><img src="../../assets/images/dot.png" alt="" class="dot"></div>
                        <p class="text-xs text-darkGray margin-bottom">{{giftDetails.remark}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="buy-box bg-white">
            <div class="buyBtn text-df text-center bg-orangeDark" @click="showExchange()">立即兑换</div>
        </div>
        <van-popup v-model="showPayWorde" :style="{ width: '300px', height: '238px', top: '30%', borderRadius: '4px' }">
            <div class="showPayWorde-centent">
                <p class="text-lg text-bold text-center title">确认使用<span class="text-orangeDark">20</span>个金豆兑换？</p>
                <van-password-input ref="passwordInput" gutter='10' class="password-input" :value="verificationCode" length='6' :mask="false" :focused="showKeyboard" @focus="showKeyboard = true" />
                <p class="text-df text-center text-orangeDark code" v-show="!sendVerificationCode" @click="sendVerificationCodeFn">获取短信验证码</p>
                <p class="text-df text-center text-grayLight code flex flex-row align-center justify-center" v-show="sendVerificationCode"><van-count-down class="text-grayLight" ref="countDown" millisecond :time="60000" :auto-start="false" format="ss" @finish="sendVerificationCodeFinish" />s后重新发送</p>
                <div class="btns text-center text-df">
                    <span class="cancel bg-white text-gray text-center" @click="showPayWorde=false">取消</span>
                    <span class="duihuan bg-orangeDark text-white text-center" @click="exchange">兑换</span>
                </div>
            </div>
        </van-popup>
        <van-number-keyboard class="keyboard" :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
    </div>
</template>

<script>
    import { mapState,mapMutations } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'exchangeGoodsDetails',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                showPayWorde: false,
                sendVerificationCode: false,
                verificationCode: '',
                showKeyboard: false,
                giftDetails: {}
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            this.giftDetails = this.$route.query;
            this.info();
        },
        methods: {
            async info() {
            },
            async onRefresh() {
                await this.info();
            },
            // 显示兑换弹框
            async showExchange() {
                this.showPayWorde = true;
                this.showKeyboard = true;
            },
            onInput(key) {
                this.verificationCode = (this.verificationCode + key).slice(0, 6);
            },
            onDelete() {
                this.verificationCode = this.verificationCode.slice(0, this.verificationCode.length - 1);
            },
            // 发送验证码
            sendVerificationCodeFn() {
                this.sendVerificationCode = true;
                this.$refs.countDown.start();
            },
            // 倒计时完成
            sendVerificationCodeFinish() {
                this.sendVerificationCode = false;
                this.$refs.countDown.reset();
            },
            // 兑换
            exchange() {
                this.showPayWorde = false;
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
    .exchangeGoodsDetails {
        .van-overlay {
            z-index: 2001 !important;
        }
        .van-hairline--surround::after {
            border-width: 0;
        }
        .van-key {
            text-align: center;
            display: initial;
        }
    }
</style>
<style lang="scss" scoped>
    .exchangeGoodsDetails {
        .keyboard {
            z-index: 2002;
        }
        .password-input {
            height: 44px;
            li {
                color: var(--orangeDark);
                font-weight: 600;
                font-size: 31px;
                border-bottom: 2px solid #D8D8D8;
                &:last-child {
                    margin-right: 0;
                }
            }
            .van-hairline--left::after {
                border-width: 0;
            }
            .van-password-input__cursor {
                background-color: var(--orangeDark);
                width: 2px;
            }
        }
        .header {
            background: transparent;
        }
        .pic {
            width: 100%;
            height: 375px;
        }
        .dot {
            width: 8px;
            height: 7px;
            margin-left: 6px;
        }
        .buy-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            box-shadow: 0px 0px 9px 0px var(--blackShadow);
            height: 48px;
            .buyBtn {
                width:345px;
                height:36px;
                line-height:36px;
                border-radius:4px;
                margin: 6px auto;
            }
        }
        .showPayWorde-centent {
            .title {
                height: 22px;
                line-height: 22px;
                margin-top: 26px;
                margin-bottom: 29px;
            }
            .code {
                height: 20px;
                line-height: 20px;
                margin-top: 21px;
                margin-bottom: 26px;
            }
            .btns {
                .cancel {
                    display: inline-block;
                    width:134px;
                    height:36px;
                    line-height:36px;
                    border-radius:4px 0px 0px 4px;
                    border:1px solid rgba(197,197,197,1);
                    margin-right: 4px;
                }
                .duihuan {
                    display: inline-block;
                    width:134px;
                    height:36px;
                    line-height: 36px;
                    border-radius:0px 4px 4px 0px;
                    border:1px solid rgba(236,80,31,1);
                }
            }
        }
    }
</style>