<template>
    <div class="effectiveBillDetails dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">提单详情</span>
                </template>
                <template #right>
                    <span class="text-sm text-orangeLight">回租协议</span>
                    <!-- <span class="text-sm text-orangeLight">提单协议</span> -->
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier bg-white">
            <div class="content">
                <p class="text-xl text-bold">提单信息</p>
                <van-cell title="提单编号" value="TB202005111528565140" />
                <van-cell title="提单克重" value="20克" />
                <van-cell title="提单生成时间" value="2020-05-13 17:30:38" />
                <van-cell title="提单来源" value="买金" />
                <van-cell title="回租" is-link value="回租生金" :to="{path: '/effectiveBillLeaseback'}" />
                <van-cell title="提金" is-link value="提取实物" :to="{path: '/effectiveBillWithdrawal'}" />
                <van-cell title="租赁" is-link value="卖金得利" :to="{path: '/effectiveBillSell'}" />
                <div class="text-center text-sm padding-tb">
                    <router-link :to="{path:'/effectiveBillFootprint'}">
                        <span class="text-sm text-darkGray">查看提单足迹</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'effectiveBillDetails',
        components: {
        },
        props:{
            
        },
        data() {
            return {
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
    .effectiveBillDetails {
        
    }
</style>
<style lang="scss" scoped>
    .effectiveBillDetails {
        .header {
            background: #fff;
        }
        p,.p {
            padding: 10px 15px;
        }
    }
</style>