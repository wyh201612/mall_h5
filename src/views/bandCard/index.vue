<template>
    <div class="bandCard dashboard-container flex flex-direction">
        <div style="margin-bottom: 48px;overflow-y: scroll;">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-darkGray">绑定银行卡</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier">
                <div class="content">
                    <p class="text-xl text-bold">实名认证</p>
                    <van-field v-model="name" center clearable label="真实姓名" placeholder="请输入真实姓名" />
                    <van-field v-model="idCard" label="身份证号" placeholder="请输入您的证件号码" />
                    <p class="text-xl text-bold">绑定银行卡</p>
                    <van-field v-model="bankCardNo" center clearable label="银行卡号" placeholder="请输入您的储蓄卡卡号" />
                    <van-field readonly clickable name="picker" right-icon="arrow" :value="bankOfDeposit" label="开户银行" placeholder="请选择您的开户银行" @click="showBankOfDeposit = true" />
                    <p class="text-xl text-bold">验证预留手机号</p>
                    <van-field v-model="phone" center clearable label="预留手机号" maxlength="11" placeholder="请输入预留手机号">
                        <template #button>
                            <van-button size="small" color="#EC501F" @click="sendVerificationCodeFn" v-show="!sendVerificationCode">发送验证码</van-button>
                            <van-button size="small" color="#C5C5C5" v-show="sendVerificationCode"><div class="flex flex-row align-center justify-center"><van-count-down class="text-white" ref="countDown" millisecond :time="60000" :auto-start="false" format="ss" @finish="sendVerificationCodeFinish" />s后重发</div></van-button>
                        </template>
                    </van-field>
                    <van-field v-model="sms" type="digit" maxlength="6" label="手机验证码" placeholder="请输入手机验证码" />
                    <div class="flex flex-row align-center p">
                        <van-checkbox v-model="checked" icon-size="16px" checked-color="#EC501F" class="margin-right-sm"></van-checkbox>
                        <div class="text-darkGray text-sm">我已阅读并同意<span class="text-orangeLight">《产品购买协议》</span></div>
                    </div>
                    <div class="fixed-box">
                        <div class="buyBtn text-df text-center bg-orangeDark" @click="nextStep()">下一步</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 银行卡选择弹窗 -->
        <van-popup v-model="showBankOfDeposit" position="bottom" class="bandCardPopup">
        </van-popup>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'bandCard',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                name: '',
                idCard: '',
                bankCardNo: '',
                bankOfDeposit: '',
                showBankOfDeposit: false,
                phone: '',
                sms: '',
                sendVerificationCode: false,
                checked: false,
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
            // 银行卡选择确认操作
            onConfirm(value) {
                this.bankOfDeposit = value;
                this.showBankOfDeposit = false;
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
            // 下一步
            nextStep() {
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
    .bandCard {
    }
</style>
<style lang="scss" scoped>
    .bandCard {
        height: 100vh;
        background: #fff;
        .bandCardPopup {
            height: 300px;
        }
        .header {
            background: #fff;
        }
        p,.p {
            padding: 0.26667rem 0.42667rem;
        }
        .fixed-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            .buyBtn {
                width:345px;
                height:36px;
                line-height:36px;
                border-radius:4px;
                margin: 6px auto;
            }
        }
    }
</style>