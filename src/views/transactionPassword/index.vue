<template>
    <div class="transactionPassword dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-blackDark text-df text-bold">{{type==1?'修改交易密码':type==2?'设置交易密码':'找回交易密码'}}</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier">
            <div class="content">
                <!-- 设置交易密码 -->
                <div v-if="type==2">
                    <van-field v-model="transactionPassword" maxlength="6" label="交易密码" placeholder="请输入6位由数字组成的交易密码" />
                    <van-field v-model="confirmTransactionPassword" maxlength="6" label="确认密码" placeholder="请重复输入交易密码" />
                    <div class="margin-lg"><van-button round block type="info" color="#EC501F">提交</van-button></div>
                </div>
                <!-- 找回密码 -->
                <div v-if="type==3">
                    <div v-if="!forgetPassword">
                        <van-field v-model="phone" label="注册手机号" placeholder="请输入注册的手机号" />
                        <van-field v-model="sms" type="digit" label="手机验证码" placeholder="请输入短信验证码" class="align-center">
                            <template #button>
                                <van-button size="small" color="#EC501F" @click="sendVerificationCodeFn" v-show="!sendVerificationCode">发送验证码</van-button>
                                <van-button size="small" color="#C5C5C5" v-show="sendVerificationCode"><div class="flex flex-row align-center justify-center"><van-count-down class="text-white" ref="countDown" millisecond :time="60000" :auto-start="false" format="ss" @finish="sendVerificationCodeFinish" />s后重发</div></van-button>
                            </template>
                        </van-field>
                        <div class="margin-lg"><van-button round block type="info" color="#EC501F">下一步</van-button></div>
                    </div>
                    <div v-if="forgetPassword">
                        <van-field v-model="transactionPassword" maxlength="6" label="交易密码" placeholder="请输入6位由数字组成的交易密码" />
                        <van-field v-model="confirmTransactionPassword" maxlength="6" label="确认密码" placeholder="请重复输入交易密码" />
                        <div class="margin-lg"><van-button round block type="info" color="#EC501F">完成</van-button></div>
                    </div>
                </div>
                <!-- 修改密码 -->
                <div v-if="type==1">
                    <van-field v-model="oldPassword" maxlength="6" label="原密码" placeholder="请输入原密码" />
                    <van-field v-model="transactionPassword" maxlength="6" label="新密码" placeholder="请输入6位由数字组成的交易密码" />
                    <van-field v-model="confirmTransactionPassword" maxlength="6" label="确认密码" placeholder="请重复输入新密码" />
                    <div class="margin-lg"><van-button round block type="info" color="#EC501F">完成</van-button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'transactionPassword',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                type: '',
                oldPassword: '',
                transactionPassword: '',
                confirmTransactionPassword: '',
                phone: '',
                sms: '',
                sendVerificationCode: false,
                forgetPassword: false,
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            this.type = this.$route.query.type;
            this.info();
        },
        methods: {
            async info() {
                // await this.queryInvestProduct();
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
            goBack() {
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .transactionPassword {
    }
</style>
<style lang="scss" scoped>
    .transactionPassword {
        .header {
            background: #fff;
        }
    }
</style>