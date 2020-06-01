<template>
    <div class="effectiveBillFootprint dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">提单足迹</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier bg-white">
            <div class="content padding-lr margin-top-lg">
                
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'effectiveBillFootprint',
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
                this.$router.go(-1)
            },
        },
        destroyed () {
        }
    }
</script>
<style lang="scss">
    .effectiveBillFootprint {
        
    }
</style>
<style lang="scss" scoped>
    .effectiveBillFootprint {
        .header {
            background: #fff;
        }
        .itemz {
            box-shadow: 0 0 10px 0;
            .van-cell__title {
                flex: inherit;
            }
            .btn {
                display: inline;
            }
        }
    }
</style>