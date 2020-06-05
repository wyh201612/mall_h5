<template>
    <div class="effectiveBillLeaseback dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">回租提单</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier bg-white">
                <div class="content">
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">提单编号</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">TB202005111528565140</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">提单克重</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">20克</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">提单生成时间</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">2020-05-13 17:30:38</span>
                        </template>
                    </van-cell>
                    <van-cell>
                        <template #title>
                            <span class="text-sm text-blackDark">提单来源</span>
                        </template>
                        <template #default>
                            <span class="text-sm text-darkGray">买金</span>
                        </template>
                    </van-cell>
                    <van-cell is-link @click="showTerm=true">
                        <template #title>
                            <span class="text-sm text-blackDark">回租期限</span>
                        </template>
                        <template #default>
                            <span class="text-sm" :class="showTermRadio!='1'?'text-blue':'text-darkGray'">{{showTermRadio=='1'?'请选择回租期限':'回租30天'}}</span>
                        </template>
                    </van-cell>
                    <div v-show="showTermRadio!=1&&showTermRadio!=''">
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">回租价格</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">380.44元</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">回租时间</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">2020-05-13 17:30:38</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">到期时间</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-darkGray">2020-05-13 17:30:38</span>
                            </template>
                        </van-cell>
                        <van-cell>
                            <template #title>
                                <span class="text-sm text-blackDark">回租金生金奖励</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-orangeDark">380.44元</span>
                            </template>
                        </van-cell>
                        <van-cell is-link @click="showRedEnv=true">
                            <template #title>
                                <span class="text-sm text-blackDark">黄金红包奖励</span>
                            </template>
                            <template #default>
                                <span class="text-sm text-orangeDark">+380.44元</span>
                            </template>
                        </van-cell>
                        <p class="text-sm text-darkGray padding-lr padding-tb">注:回租奖励金额将在您提单到期后的24小时内，发放到您的APP账户中，回租价格统一按照昨日收盘价计算</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="buy-box flex flex-row align-center padding-lr bg-white">
            <div class="text-blue text-lg flex-sub flex flex-row align-center" style="height: 26px;line-height: 26px;">奖励<span class="text-xxl margin-left-xs">￥2500.00</span></div>
            <div class="buyBtn text-df text-center bg-blue" @click="confirm()">确认回租</div>
        </div>
        <!-- 选择期限弹框 -->
        <van-popup v-model="showTerm" round position="bottom" :style="{ height: '551px' }">
            <div class="showTerm-title text-df text-center">请选择回租期限</div>
            <div class="showTerm-centent">
                <van-radio-group v-model="showTermRadio">
                    <van-cell-group>
                        <van-cell clickable  @click="radio = '1'">
                            <template #title>
                                <span class="text-center" style="display: inline-block;width: 75px;border-right: 1px solid #f1f1f1;">暂不回租</span>
                                <span class="text-darkGray margin-left-lg">无回租奖励</span>
                            </template>
                            <template #right-icon>
                                <van-radio name="1" />
                            </template>
                        </van-cell>
                        <van-cell clickable @click="radio = '2'">
                            <template #title>
                                <span class="text-lg text-bold text-center" style="display: inline-block;width: 75px;border-right: 1px solid #f1f1f1;">30天</span>
                                <span class="margin-left-lg">预计回租奖励<span class="text-orangeDark">18.22元</span></span>
                            </template>
                            <template #right-icon>
                                <van-radio name="2" />
                            </template>
                        </van-cell>
                        <van-cell clickable @click="radio = '3'">
                            <template #title>
                                <span class="text-lg text-bold text-center" style="display: inline-block;width: 75px;border-right: 1px solid #f1f1f1;">60天</span>
                                <span class="margin-left-lg">预计回租奖励<span class="text-orangeDark">20.22元</span></span>
                            </template>
                            <template #right-icon>
                                <van-radio name="3" />
                            </template>
                        </van-cell>
                        <van-cell clickable @click="radio = '4'">
                            <template #title>
                                <span class="text-lg text-bold text-center" style="display: inline-block;width: 75px;border-right: 1px solid #f1f1f1;">180天</span>
                                <span class="margin-left-lg">预计回租奖励<span class="text-orangeDark">218.22元</span></span>
                            </template>
                            <template #right-icon>
                                <van-radio name="4" />
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
            </div>
            <div class="showTermBtn bg-blue text-center text-df" @click="showTerm=false">确定</div>
        </van-popup>
        <!-- 选择红包弹框 -->
        <van-popup v-model="showRedEnv" round position="bottom" class="popupRedEnv" :style="{ height: '551px' }">
            <div class="showTerm-title text-df text-center">优惠</div>
            <div class="showTerm-centent">
                <van-radio-group v-model="showRedEnvRadio">
                    <van-cell-group>
                        <van-cell clickable  @click="radio = '1'">
                            <template #title>
                                <div class="flex flex-row align-center">
                                    <div class="left text-center" style="width: 95px;">
                                        <div class="text-price text-blue text-sxxlm">5</div>
                                        <div class="text-gray text-xs">满50可用</div>
                                    </div>
                                    <div>
                                        <div class="text-blackDark">商城优惠券</div>
                                        <div class="text-gray text-xs">有效期 2020.1.12-2020.4.2</div>
                                        <div class="text-gray text-xs">使用规则<img src="../../assets/images/xia.png" alt="" class="margin-left-xs" v-show="!rule" @click="rule=!rule" style="width:10px;height:8px;"><img src="../../assets/images/shang.png" alt="" class="margin-left-xs" v-show="rule" @click="rule=!rule" style="width:10px;height:8px;"></div>
                                    </div>
                                </div>
                            </template>
                            <template #label>
                                <p class="padding-lr" v-show="rule">使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则使用规则</p>
                            </template>
                            <template #right-icon>
                                <van-radio name="1" />
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
            </div>
            <div class="showTermBtn bg-blue text-center text-df" @click="confirmshowRedEnv">确定</div>
        </van-popup>
        <!-- 支付弹框 -->
        <van-popup v-model="showPayWorde" :style="{ width: '300px', height: '184px', top: '30%', borderRadius: '4px' }">
            <div class="showPayWorde-centent">
                <div class="text-lg text-bold text-center title">请输入交易密码</div>
                <van-password-input ref="passwordInput" gutter='10' class="password-input" :value="verificationCode" length='6' :mask="false" :focused="showKeyboard" @focus="showKeyboard = true" />
                <div class="tip text-gray text-df text-center">忘记密码？<span class="text-blue" @click="transactionPassword">找回密码</span>继续支付吧</div>
            </div>
        </van-popup>
        <van-number-keyboard class="keyboard" :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false" />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'effectiveBillLeaseback',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                showTerm: false,
                showTermRadio: '1',
                showRedEnv: false,
                showRedEnvRadio: false,
                rule: false,
                showPayWorde: false,
                showKeyboard: false,
                verificationCode: '',
                giftDetails: {},
                arr: []
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
            onInput(key) {
                this.verificationCode = (this.verificationCode + key).slice(0, 6);
                this.arr.push(this.verificationCode)
                if(this.arr.length==6) {
                    this.$router.replace({path: '/effectiveBillLeaseSuccess'})
                }
            },
            onDelete() {
                this.verificationCode = this.verificationCode.slice(0, this.verificationCode.length - 1);
            },
            transactionPassword() {
                this.$router.push({path: '/transactionPassword' ,query: {type:3}})
            },
            // 选择红包确定
            confirmshowRedEnv() {

            },
            goBack() {
                localStorage.setItem('activeTabs',this.$route.query.active);
                this.$router.go(-1)
            },
            confirm() {
                this.showPayWorde = true;
                this.showKeyboard = true;
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .effectiveBillLeaseback {
        .van-key {
            text-align: center;
            display: initial;
        }

        .van-cell__right-icon {
            font-size: 12px;
        }
        .van-overlay {
            z-index: 2001 !important;
        }
        .van-popup--bottom.van-popup--round {
            border-radius:4px 4px 0px 0px;
        }
        .van-cell--clickable {
            padding: 16px;
        }
        .showTerm-centent {
            .van-cell--clickable {
                padding: 16px 16px 16px 0;
            }
            .van-cell:not(:last-child)::after {
                left: 0;
            }
        }
        .popupRedEnv {
            background: #f7f7f7;
            .van-cell-group {
                background: transparent;
            }
            .van-cell {
                margin-bottom: 10px;
            }
        }
    }
</style>
<style lang="scss" scoped>
    .effectiveBillLeaseback {
        .header {
            background: #fff;
        }
        .contaier {
            padding-bottom: 48px;
        }
        .showPayWorde-centent {
            .title {
                height:22px;
                line-height:22px;
                margin: 26px 0 29px 0;
            }
            .tip {
                height:20px;
                line-height:20px;
                margin-top: 21px;
            }
        }
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
        .buy-box {
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
        .showTerm-title {
            height: 60px;
            line-height: 60px;
        }
        .showTerm-centent {
            height: calc(100% - 60px - 36px - 10px);
            padding: 0 15px;
        }
        .showTermBtn {
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
</style>