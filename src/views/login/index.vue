<template>
    <div class="login dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-blackDark text-df text-bold">登陆</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier">
            <div class="content margin-lr">
                <van-field v-model="ruleForm.loginName" center clearable label="手机号码" placeholder="请输入手机号码">
                    <template #button>
                        <van-button size="small" color="#EC501F" @click="sendVerificationCodeFn" v-show="!sendVerificationCode">发送验证码</van-button>
                        <van-button size="small" color="#C5C5C5" v-show="sendVerificationCode"><p class="flex flex-row align-center justify-center"><van-count-down class="text-white" ref="countDown" millisecond :time="60000" :auto-start="false" format="ss" @finish="sendVerificationCodeFinish" />s后重发</p></van-button>
                    </template>
                </van-field>
                <van-field v-model="ruleForm.code" type="digit" label="验证码" placeholder="请输入验证码" />
                <div class="buy-box margin-top">
                    <div class="buyBtn text-df text-center bg-orangeDark" @click="loginFn">登陆</div>
                </div>
                <div class="flex flex-row align-start margin-top">
                    <van-checkbox v-model="checked" icon-size="16px" checked-color="#EC501F" class="margin-right-sm" style="margin-top: 2px;"></van-checkbox>
                    <div class="text-darkGray">
                        <div class="text-sm">我已阅读并同意<span class="text-orangeLight">《用户协议和隐私政策》</span></div>
                        <div class="text-sm">提示：未注册的手机号，登录后将视为自动注册</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
    import { verificationCodeCkeck, verificationCodeCreate, login } from '@/api/user'
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'login',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                ruleForm: {
                    loginName: '',
                    code: '',
                    checked: false
                },
                sendVerificationCode: false,
                checked: true,
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            if(getCookie('rememberAccount')=='1') {
                this.ruleForm.checked = true // 记住账户
                this.ruleForm.loginName = getCookie('mobile');
            } else {
                this.ruleForm.checked = false // 记住账户
            }
        },
        methods: {
            // 发送验证码
            sendVerificationCodeFn() {
                let _this = this;
                let data = {
                    loginType: "3", // 登陆类型 1：管理员 2：普通用户 3：会员用户
                    loginSource: 1, // 登陆客户端 1：pc
                    type: "6", // 类型 1：注册验证码 2：修改密码验证码 3：忘记密码验证码 4：验证身份验证码 5.管理员登陆 6快捷登陆
                    loginName: _this.ruleForm.loginName
                }
                var regMobile = /^[1]\d{10}$/;
                if (_this.ruleForm.loginName === '') {
                    _this.$notify({ type: 'danger', message: '请输入手机号码' });
                    return false;
                } else if(!regMobile.test(_this.ruleForm.loginName)){
                    _this.$notify({ type: 'danger', message: '请输入正确的手机号码' });
                    return false;
                }
                verificationCodeCreate(this.$qs.stringify(data)).then(res => {
                    if (res.code == 200) {
                        _this.$notify({ type: 'success', message: '发送成功' });
                        _this.sendVerificationCode = true;
                        _this.$refs.countDown.start();
                    } else {
                        _this.$notify({ type: 'danger', message: res.msg });
                    }
                })
            },
            // 倒计时完成
            sendVerificationCodeFinish() {
                this.sendVerificationCode = false;
                this.$refs.countDown.reset();
            },
            loginFn() {
                if (this.ruleForm.loginName === '') {
                    this.$notify({ type: 'danger', message: '请输入手机号码' });
                    return false;
                }
                if(this.ruleForm.code === ''){
                    this.$notify({ type: 'danger', message: '请输入验证码' });
                    return false;
                }
                if(!this.checked){
                    this.$notify({ type: 'danger', message: '请先同意协议' });
                    return false;
                }
                this.$store.dispatch('user/login', this.ruleForm).then(() => {
                    if(this.ruleForm.checked==true) {
                        setCookie('rememberAccount','1'); // 记住账户
                    } else {
                        setCookie('rememberAccount','0');
                    }
                    this.$notify({ type: 'success', message: '登录成功！' });
                    if(this.$route.query.url == location.hostname) {
                        this.$router.go(-1)
                    } else {
                        this.$router.replace({ path: '/goldShop' })
                    }
                }).catch(() => {
                })
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
    .login {
    }
</style>
<style lang="scss" scoped>
    .login {
        height: 100vh;
        background: #fff;
        .header {
            background: #fff;
        }
        .content{
            .van-cell {
                padding: 0.26667rem 0;
            }
            .buy-box {
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
    }
</style>