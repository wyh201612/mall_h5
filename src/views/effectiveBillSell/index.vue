<template>
    <div class="effectiveBillSell dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">出售提单</span>
                </template>
                <template #right>
                    <van-icon name="question-o" />
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
        name: 'effectiveBillSell',
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
            console.log(this.$route.query.active)
        },
        methods: {
            async info() {
                // await this.queryInvestProduct();
            },
            async goBack() {
                localStorage.setItem('activeTabs',this.$route.query.active);
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .effectiveBillSell {
        
    }
</style>
<style lang="scss" scoped>
    .effectiveBillSell {
        .header {
            background: #fff;
        }
        p,.p {
            padding: 10px 15px;
        }
    }
</style>