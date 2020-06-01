<template>
    <div class="app-wrapper">
        <div class="main-container">
            <app-main :goldenBeansInfo='goldenBeansInfo' :billNums='billNums' :activityCouponMemberList='activityCouponMemberList'  />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { getCookie, setCookie, removeCookie } from '@/utils/auth'
import { AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import { mapState,mapMutations } from 'vuex'

export default {
    name: 'Layout',
    data() {
        return {
            pathUrl: this.$route.path,
            newsaccessToken: this.$store.getters.accessToken,
            timer: null,
            eventHub: new Vue(),
            goldenBeansInfo: {}, // 金豆信息
            billNums: {
                bills: '',
                extractedGram: '',
                rewards: '',
                soldGram: '',
                totalGram: '',
            }, // 黄金持有信息
            activityCouponMemberList: {}, // 优惠券信息
        }
    },
    provide() {
        return {
            eventHub: this.eventHub
        };
    },
    filters: {
    },
    components: {
        AppMain
    },
    mixins: [ResizeMixin],
    computed: {
        ...mapState({
            accessToken: state => state.user.accessToken,
            mobile: state => state.user.mobile,
            loginName: state => state.user.loginName,
            mobile: state => state.user.mobile
        }),
        path() {
            return this.$route.path;
        },
        token() {
            return this.$store.getters.accessToken;
        },
    },
    created() {
        
    },
    mounted() {
        if(this.newsaccessToken && this.newsaccessToken !='' && this.newsaccessToken != 'null' && this.newsaccessToken != 'undefined') {
            this.getUserGoldenBeans();
            this.getTbillCenter();
            this.getActivityCouponMemberList();
        }
    },
    watch: {
        path(val){
            this.pathUrl = val;
            if(this.newsaccessToken && this.newsaccessToken!='' && this.newsaccessToken != 'null' && this.newsaccessToken != 'undefined') {
                this.getUserGoldenBeans();
                this.getTbillCenter();
                this.getActivityCouponMemberList();
            }
        },
        token(val){
            this.newsaccessToken = val;
            if(this.newsaccessToken && this.newsaccessToken!='' && this.newsaccessToken != 'null' && this.newsaccessToken != 'undefined') {
                this.getUserGoldenBeans();
                this.getTbillCenter();
                this.getActivityCouponMemberList();
            }
        },
    },
    methods: {
        /**
         * 获取用户金豆信息
         * memberId String Y 会员ID
         * mobile String Y 手机号
         * name String Y 姓名
         * outgoBean Integer Y 支出金豆
         * usableBean Integer Y 可用金豆
         * incomeBean Integer Y 收入金豆总数
         * outgoGram double Y 支出金豆预计获得黄金克最
         * incomeGram double Y 收入金豆预计获得黄金克重
         * addTime String Y 账户创建时间
         */
        async getUserGoldenBeans() {
            this.goldenBeansInfo = await this.$api.getUserGoldenBeans('',getCookie('accessToken'));
        },
        /**
         * 个人中心优惠券列表
         * method： GET
         * 接口地址：  activity/coupon/member/list
         * type int 是  类型：0-黄金红包；1-回租福利券；2-商城满减券
         */
        async getActivityCouponMemberList() {
            let params = {
                type: 2
            }
            this.activityCouponMemberList = await this.$api.getActivityCouponMemberList(params,getCookie('accessToken'));
        },
        // 黄金持有总量
        async getTbillCenter() {
            let data = await this.$api.getTbillCenter('',getCookie('accessToken'));
            let bills = data.bills.toFixed(2);
            let extractedGram = data.extractedGram.toFixed(2);
            let rewards = data.rewards.toFixed(2);
            let soldGram = data.soldGram.toFixed(2);
            let totalGram = data.totalGram.toFixed(2);
            this.billNums.bills = bills;
            this.billNums.extractedGram = extractedGram;
            this.billNums.rewards = rewards;
            this.billNums.soldGram = soldGram;
            this.billNums.totalGram = totalGram;
        },
    },
    distroyed: function() {
        
    }
}
</script>

<style lang="scss" scoped>

    .app-wrapper {
        position: relative;
        height: 100%;
    }
    
</style>
