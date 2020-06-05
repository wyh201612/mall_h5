<template>
    <div class="addressList dashboard-container flex flex-direction">
        <div class="header">
            <van-nav-bar class="bg-transparent" :border='false' @click-left='goBack()'>
                <template #left>
                    <img src="../../assets/images/back.png" alt="" class="back-icon">
                </template>
                <template #title>
                    <span class="text-sm text-blackDark text-df text-bold">收货地址</span>
                </template>
            </van-nav-bar>
        </div>
        <div class="contaier" style="margin-bottom: 48px;">
            <div class="content margin-lr">
                <div class="item bg-white margin-top-sm" v-for="(item, index) in 5" :key="index">
                    <div class="item-top text-df flex flex-row align-center justify-between">
                        <span>收件人姓名</span>
                        <span>152****0525</span>
                    </div>
                    <div class="address text-sm text-gray van-hairline--bottom">杭州市拱墅区都市水乡xxx元mm幢</div>
                    <div class="item-bottom text-sm flex flex-row align-center justify-between">
                        <div class="flex flex-row align-center">
                            <img src="../../assets/images/checked.png" alt="">
                            <!-- <img src="../../assets/images/nochecked.png" alt=""> -->
                            <span class="text-orangeDark">默认地址</span>
                        </div>
                        <van-icon name="edit" @click="editAddress()" />
                    </div>
                </div>
            </div>
        </div>
        <div class="buy-box">
            <div class="buyBtn text-df text-center bg-orangeDark" @click="addAddress()">添加新地址</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { getCookie, setCookie, removeCookie } from '@/utils/auth'
    export default {
        name: 'addressList',
        components: {
        },
        props:{
            
        },
        data() {
            return {
                isBackground: false,
            }
        },
        computed: {
            
        },
        created() {
            
        },
        mounted() {
            this.info();
            window.addEventListener('scroll', this.scrollHander);
        },
        methods: {
            //滚动事件
            scrollHander() {
                // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                this.isBackground = scrollTop > 20 ? true : false;
            },
            async info() {
                // await this.queryInvestProduct();
            },
            addAddress() {
                this.$router.push({path: '/addAddress',query: {type: 'add'}})
            },
            editAddress() {
                this.$router.push({path: '/addAddress',query: {type: 'edit'}})
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
    .addressList {
    }
</style>
<style lang="scss" scoped>
    .addressList {
        .header {
            background: #fff;
        }
        .item {
            height: 89px;
            border-radius:4px;
            padding: 11px 12px 8px 12px;
            &:last-child {
                margin-bottom: 10px;
            }
            .item-top{
                height: 20px;
                line-height: 20px;
                margin-bottom: 3px;
            }
            .address {
                padding-bottom: 6px;
            }
            .item-bottom {
                height: 17px;
                margin-top: 6px;
                img {
                    width: 12px;
                    height: 12px;
                    margin-right: 8px;
                    vertical-align: middle;
                }
            }
        }
        .buy-box {
            z-index: 99;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 48px;
            background: #f7f7f7;
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