<template>
    <div class="effectiveBill dashboard-container flex flex-direction">
        <div class="box-centent">
            <div class="header">
                <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                    <template #left>
                        <img src="../../assets/images/back.png" alt="" class="back-icon">
                    </template>
                    <template #title>
                        <span class="text-sm text-blackDark text-df text-bold">已生效提单</span>
                    </template>
                </van-nav-bar>
            </div>
            <div class="contaier">
                <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
                    <template #loading>
                        <img class="refresh-icon" src="../../assets/images/refresh-icon.png" />
                    </template>
                    <div class="content padding-lr">
                        <div class="top-price flex flex-row justify-between bg-white padding-tb">
                            <div class="flex flex-direction flex-sub text-center" style="border-right: 1px solid #f1f1f1;">
                                <span class="text-sm tips-title">已出售黄金克重(克)</span>
                                <span class="text-xxll text-bold text-blue tips-price">0.00</span>
                            </div>
                            <div class="flex flex-direction flex-sub text-center">
                                <span class="text-sm tips-title">已提实物黄金克重(元)</span>
                                <span class="text-xxll text-bold text-blue tips-price">0.00</span>
                            </div>
                        </div>
                    </div>
                    <van-tabs v-model="active" sticky offset-top='48' color='#3987EC' background='#f7f7f7' title-inactive-color='#6e6e6e' title-active-color='#3987EC' :border='false'>
                        <van-tab title="已出售">
                            <div class="itemz margin text-gray">
                                <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails'}" />
                                <van-cell title="提单克重" value="20克" />
                                <van-cell title="出售时间" value="2020-05-13 17:30:38" />
                            </div>
                            <div class="itemz margin text-gray">
                                <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails'}" />
                                <van-cell title="提单克重" value="20克" />
                                <van-cell title="出售时间" value="2020-05-13 17:30:38" />
                            </div>
                        </van-tab>
                        <van-tab title="已提金">
                            <div class="itemz margin text-gray">
                                <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails'}" />
                                <van-cell title="提单克重" value="20克" />
                                <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                            </div>
                            <div class="itemz margin text-gray">
                                <van-cell title="提单编号" is-link value="TB202005111528565140" :to="{path: '/effectiveBillDetails'}" />
                                <van-cell title="提单克重" value="20克" />
                                <van-cell title="生成时间" value="2020-05-13 17:30:38" />
                            </div>
                        </van-tab>
                    </van-tabs>
                </van-pull-refresh>
            </div>
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
            top: 48px !important;
        }
    }
</style>
<style lang="scss" scoped>
    .effectiveBill {
        .header {
        }
        .top-price {
            height: 130px;
            margin-bottom: 12px;
            .tips-title {
                height:17px;
                line-height:17px;
                margin-top: 18px;
                margin-bottom: 16px;
            }
            .tips-price {
                height:28px;
                line-height:28px;
            }
        }
        .itemz {
            .van-cell__title {
                flex: inherit;
            }
            .btn {
                display: inline;
            }
        }
    }
</style>