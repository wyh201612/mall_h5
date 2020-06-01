<template>
    <div class="exchangeSuccess dashboard-container flex flex-direction">
        <div class=" bg-white">
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
                <div class="btn text-df text-white text-center bg-orangeDark" @click="finish">完成</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'exchangeSuccess',
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
            finish() {
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .exchangeSuccess {
        
    }
</style>
<style lang="scss" scoped>
    .exchangeSuccess {
        height: 100vh;
        background: #fff;
        .icon {
            margin-top: 75px;
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
        .btn {
            width:258px;
            height:36px;
            line-height:36px;
            border-radius:3px;
            margin: 8px auto 0;
        }
    }
</style>