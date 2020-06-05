<template>
    <div class="effectiveBillDetails dashboard-container flex flex-direction bg-white">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-blackDark text-df text-bold">提单详情</span>
                </template>
                <template #right>
                    <span class="text-sm text-darkGray">回租协议</span>
                    <!-- <span class="text-sm text-darkGray">提单协议</span> -->
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
                <div class="text-center text-sm padding-tb-lg">
                    <router-link :to="{path:'/effectiveBillFootprint'}">
                        <span class="text-df text-blue">查看提单足迹</span>
                    </router-link>
                </div>
            </div>
            <div class="fixed-box bg-white padding-lr flex flex-row align-center justify-end">
                <span class="btn text-blue text-sm text-center margin-right-sm" @click="tijin">提金</span>
                <span class="btn text-blue text-sm text-center margin-right-sm" @click="sell">出售</span>
                <span class="btn bg-blue text-sm text-center" @click="leaseblack">回租</span>
            </div>
            <!-- <div class="fixed-box bg-white padding-lr">
                <div class="buyBtn text-df text-center bg-gray">提单锁定中，如需解冻请前往提单订单</div>
            </div> -->
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
            tijin() {
                this.$router.push({path: '/effectiveBillWithdrawal',query:{active: 1}})
            },
            sell() {
                this.$router.push({path: '/effectiveBillSell',query:{active: 1}})
            },
            leaseblack() {
                this.$router.push({path: '/effectiveBillLeaseback',query:{active: 1}})
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
        height: 100vh;
        .van-cell {
            padding: 16px 15px;
        }
        .header {
            background: #fff;
        }
        p,.p {
            padding: 10px 15px;
        }
        .fixed-box {
            border-top: 1px solid rgba(241,241,241,1);
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            .btn {
                display: inline-block;
                width:60px;
                height:25px;
                line-height: 24px;
                border-radius:13px;
                border:1px solid rgba(57,135,236,1);
            }
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