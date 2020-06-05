<template>
    <div class="effectiveBillSell dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-blackDark text-df text-bold">出售提单</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier">
            <div class="content padding-lr">
                <div class="top">
                    <div class="top-tip text-sm text-white text-center">实时金价（参考国际金价）</div>
                    <div class="top-price text-sm text-white text-center">
                        <span class="text-xxll text-bold" style="margin-right: 4px;">232.32</span>元/克
                    </div>
                </div>
                <div class="bg-white item">
                    <p class="text-sm text-darkGray">提单信息<span></span></p>
                    <van-cell title="提单购买金价" value="380.44元/克" />
                    <van-cell title="提单编号" value="TB202005111528565140" />
                    <van-cell title="提单克重" value="20克" />
                    <van-cell title="提单生成时间" value="2020-05-13 17:30:38" />
                    <van-cell title="提单来源" value="买金" />
                </div>
                <div class="bg-white item">
                    <p class="text-sm text-darkGray">出售信息<span></span></p>
                    <van-cell title="预估可得" value="20元" />
                    <van-cell title="出售手续费" value="380.44元" />
                    <van-cell title="出售到账金额" value="380.44元" />
                    <p class="text-sm text-darkGray">温馨提示：温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示</p>
                </div>
            </div>
        </div>
        <div class="buy-box">
            <div class="buyBtn text-df text-center bg-blue" @click="rePurchase()">重新购买</div>
        </div>
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
        name: 'effectiveBillSell',
        components: {
        },
        props:{
            
        },
        data() {
            return {
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
            console.log(this.$route.query.active)
        },
        methods: {
            async info() {
                // await this.queryInvestProduct();
            },
            async goBack() {
                localStorage.setItem('activeTabs',this.$route.query.active);
                this.$router.go(-1)
            },
            onInput(key) {
                this.verificationCode = (this.verificationCode + key).slice(0, 6);
                this.arr.push(this.verificationCode)
                if(this.arr.length==6) {
                    this.$router.replace({path: '/effectiveBillSellSuccess'})
                }
            },
            onDelete() {
                this.verificationCode = this.verificationCode.slice(0, this.verificationCode.length - 1);
            },
            transactionPassword() {
                this.$router.push({path: '/transactionPassword' ,query: {type:3}})
            },
            rePurchase() {
                this.showPayWorde = true;
                this.showKeyboard = true;
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .effectiveBillSell {
        .van-overlay {
            z-index: 2001 !important;
        }
        .van-key {
            text-align: center;
            display: initial;
        }
    }
</style>
<style lang="scss" scoped>
    .effectiveBillSell {
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
        .header {
        }
        .contaier {
            padding-bottom: 48px;
        }
        .van-cell {
            padding: 5px 10px;
        }
        .top {
            overflow: hidden;
            width: 345px;
            height: 130px;
            background: linear-gradient(180deg,rgba(189,211,255,1) 0%,rgba(57,135,236,1) 100%);
            border-radius: 4px;
            margin-bottom: 12px;
            .top-tip {
                height:17px;
                line-height:17px;
                margin: 39px 0 8px 0;
            }
            .top-price {
                height:28px;
                line-height:28px;
            }
        }
        .item {
            margin-bottom: 12px;
            border-radius:4px;
            p {
                position: relative;
                span {
                    position: absolute;
                    left: 0;
                    top: 12px;
                    width:2px;
                    height:12px;
                    background:rgba(57,135,236,1);
                    border-radius:1px;
                }
            }
        }
        p,.p {
            padding: 10px 10px;
        }
        .buy-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            background: #f7f7f7;
            .buyBtn {
                width:345px;
                height:36px;
                line-height:36px;
                border-radius:18px;
                margin: 6px auto;
            }
        }
    }
</style>