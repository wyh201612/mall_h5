<template>
    <div class="effectiveBillSellSuccess dashboard-container flex flex-direction">
        <div class=" bg-white">
            <div class="content">
                <div class="icon text-center">
                    <img src="../../assets/images/success-icon.png" alt="">
                </div>
                <p class="tips text-center text-df text-bold text-blue">金条已成功出售，请查看您的账户余额</p>
                <p class="tips-s text-center text-df text-darkGray">出售到账金额</p>
                <p class="tips-price text-center text-sm text-bold text-blue"><span class="text-sxxll margin-right-xs">232.32</span>元</p>
                <div class="btn text-df text-center">
                    <span @click="finish" class="gotIt text-blue text-center margin-right-xs">我知道了</span>
                    <span @click="look" class="gotIt bg-blue text-white text-center margin-left-xs">前去看看</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'effectiveBillSellSuccess',
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
                this.$router.replace({path: '/index'})
            },
            look() {
                this.$router.replace({path: '/myGold'})
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .effectiveBillSellSuccess {
        
    }
</style>
<style lang="scss" scoped>
    .effectiveBillSellSuccess {
        height: 100vh;
        background: #fff;
        .icon {
            margin-top: 35px;
            height: 220px;
            img {
                width: 220px;
                height: 220px;
            }
        }
        .tips {
            height: 20px;
            line-height: 20px;
            margin-bottom: 10px;
            margin-top: 10px;
        }
        .tips-s {
            height: 17px;
            line-height: 17px;
            margin-bottom: 25px;
        }
        .tips-price {
            height: 40px;
            line-height: 40px;
            margin-bottom: 132px;
        }
        .btn {
            .gotIt {
                display: inline-block;
                width:136px;
                height:36px;
                line-height:36px;
                border-radius:18px;
                border:1px solid rgba(57,135,236,1);
            }
        }
    }
</style>