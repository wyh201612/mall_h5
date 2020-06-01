<template>
    <div class="exchangeInDetails dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier bg-white">
            <div class="content">
                <div class="icon text-center"><van-icon name="checked" color="#EC501F" size="3.5rem" /></div>
                <p class="tips text-center text-xlx text-bold text-orangeDark">恭喜您，兑换成功</p>
                <p class="tips-s text-center text-df text-darkGray">您已成功兑换KN95口罩</p>
                <div class="orderinfo text-sm text-darkGray">
                    <p class="flex flex-row justify-between"><span>订单编号</span><span>GE20200430957515370</span></p>
                    <p class="flex flex-row justify-between"><span>下单时间</span><span>2020/04/03 09:57:51</span></p>
                    <p class="flex flex-row justify-between"><span>支付金额</span><span>20金豆</span></p>
                </div>
                <div class="text-center text-darkGray text-sm">请联系客服<span class="text-orangeDark">15258842755</span>获知礼品领取方式</div>
                <div class="text-center text-darkGray text-sm">平台将通过线下将礼品发放给您</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'exchangeInDetails',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                active: '1',
                checkedServiceAgreement: false,
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
            goBack() {
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .exchangeInDetails {
        
    }
</style>
<style lang="scss" scoped>
    .exchangeInDetails {
        height: 100vh;
        background: #fff;
        .header {
            background: #fff;
        }
        .icon {
            margin-top: 50px;
        }
        .tips {
            height: 28px;
            line-height: 28px;
            margin-bottom: 6px;
            margin-top: 60px;
        }
        .tips-s {
            height: 20px;
            line-height: 20px;
        }
        .orderinfo {
            margin: 60px 60px 60px 57px;
            p {
                height: 17px;
                line-height: 17px;
                margin-bottom: 25px;
            }
        }
    }
</style>