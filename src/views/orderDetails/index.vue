<template>
    <div class="orderDetails dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">订单详情</span>
                </template>
                <template #right>
                    <a :href="'tel:'+store_tel">
                        <span class="text-sm text-blue">联系客服</span>
                    </a>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier bg-white">
            <div class="content">
                <p class="text-xl text-bold">订单信息</p>
                <van-cell title="订单状态" value="TB202005111528565140" />
                 <van-cell title="失效原因">
                    <template #default>
                        <span class="text-red">订单超时</span>
                    </template>
                </van-cell>
                <van-cell title="提单生成时间" value="2020-05-13 17:30:38" />
                <van-cell title="提单编号" value="2020-05-13 17:30:38" />
                <van-cell title="操作流水" value="买金" />
                <van-cell title="产品名称" value="买金" />
                <van-cell title="产品类型" value="买金" />
                <van-cell title="提单克重" value="买金" />
                <van-cell title="订单金额" value="买金" />
            </div>
            <div class="fixed-box">
                <div class="buyBtn text-df text-center bg-orangeDark">重新购买</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'orderDetails',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                store_tel: '0571-56387125'
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
                localStorage.setItem('activeTabs',this.$route.query.active);
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .orderDetails {
        
    }
</style>
<style lang="scss" scoped>
    .orderDetails {
        .content {
            margin-bottom: 48px;
        }
        .header {
            background: #fff;
        }
        p,.p {
            padding: 10px 15px;
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