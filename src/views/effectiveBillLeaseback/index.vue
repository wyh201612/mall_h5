<template>
    <div class="effectiveBillLeaseback dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">回租提单</span>
                </template>
                <template #right>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier bg-white">
            <div class="content">
                <van-cell title="提单编号" value="TB202005111528565140" />
                <van-cell title="提单克重" value="20克" />
                <van-cell title="提单生成时间" value="2020-05-13 17:30:38" />
                <van-cell title="提单来源" value="买金" />
                <van-cell title="提单来源" is-link value="请选择回租期限" />
                <div class="flex flex-row">
                    <div class="bg-gray">奖励<span class="text-price">0.00</span></div>
                    <div class="bg-orangeDark">确认回租</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'effectiveBillLeaseback',
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
    .effectiveBillLeaseback {
        
    }
</style>
<style lang="scss" scoped>
    .effectiveBillLeaseback {
        .header {
            background: #fff;
        }
    }
</style>