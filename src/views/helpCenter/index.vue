<template>
    <div class="helpCenter dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">帮助中心</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier" style="margin-bottom: 48px;">
            <div class="content margin-lr">
                
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'helpCenter',
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
    .helpCenter {
    }
</style>
<style lang="scss" scoped>
    .helpCenter {
        .header {
            background: #fff;
        }
    }
</style>