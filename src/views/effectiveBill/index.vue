<template>
    <div class="effectiveBill dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-darkGray">生效提单</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier bg-white">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
                <template #loading>
                    <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                </template>
                <div class="content padding-lr margin-top-lg">
                    <div class="flex flex-row justify-between van-hairline--bottom">
                        <div class="flex flex-direction align-center">
                            <span class="text-lg">已出售黄金克重（克）</span>
                            <span class="text-df text-orangeDark margin-tb-sm">100</span>
                        </div>
                        <div class="flex flex-direction align-center">
                            <span class="text-lg">已提实物黄金克重（克）</span>
                            <span class="text-df text-orangeDark margin-tb-sm">219.33</span>
                        </div>
                    </div>
                </div>
                <van-tabs v-model="active" sticky offset-top='40' color='#EC501F' title-inactive-color='#6e6e6e' title-active-color='#EC501F' :border='false'>
                    <van-tab title="已出售">
                        <div class="itemz margin shadow text-gray">
                            <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails'}" />
                            <van-cell title="提单克重" value="20克" />
                            <van-cell title="出售时间" value="2020-05-13 17:30:38" />
                        </div>
                        <div class="itemz margin shadow text-gray">
                            <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails'}" />
                            <van-cell title="提单克重" value="20克" />
                            <van-cell title="出售时间" value="2020-05-13 17:30:38" />
                        </div>
                    </van-tab>
                    <van-tab title="已提金">
                        <div class="itemz margin shadow text-gray">
                            <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails'}" />
                            <van-cell title="提单克重" value="20克" />
                            <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                        </div>
                        <div class="itemz margin shadow text-gray">
                            <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails'}" />
                            <van-cell title="提单克重" value="20克" />
                            <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                        </div>
                    </van-tab>
                </van-tabs>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'effectiveBill',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                isLoading: false,
                active: '1'
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
                this.isLoading = true;
                // await this.queryInvestProduct();
                this.isLoading = false;
            },
            async onRefresh() {
                await this.info();
                this.isLoading = false;
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
    .effectiveBill {
        .van-tab.van-tab--active {
            font-weight: 600;
        }
        .van-tabs__line {
            height: 4px;
            width: 30px !important;
        }
        .van-sticky--fixed {
            top: 40px !important;
        }
    }
</style>
<style lang="scss" scoped>
    .effectiveBill {
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