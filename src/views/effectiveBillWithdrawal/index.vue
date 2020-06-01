<template>
    <div class="effectiveBillWithdrawal dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">提金提单</span>
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
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'effectiveBillWithdrawal',
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
    .effectiveBillWithdrawal {
        
    }
</style>
<style lang="scss" scoped>
    .effectiveBillWithdrawal {
        .header {
            background: #fff;
        }
        p,.p {
            padding: 10px 15px;
        }
    }
</style>