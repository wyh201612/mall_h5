<template>
    <vue-seamless-scroll :data="noticeList" :class-option="optionLeft" class="seamless-warp fl">
        <ul class="item">
            <li v-for="(item,index) in noticeList" :key="index" class="text-cut text-sm">
                <div class="text-darkGray">
                    <span class="phone">{{item.loginName}}</span>
                    <span class="price">{{item.goldPrice}}元/克</span>
                    <span>{{item.successTime}}</span>
                </div>
            </li>
        </ul>
    </vue-seamless-scroll>
</template>
<script>
    export default {
        props:{
            noticeList:{
                type: Array,
                required: true
            }
        },
        data () {
            return {
                
            }
        },
        computed: {
            optionLeft () {
                return {
                    direction: 1, // 0：向下；1：向上；2：向左；3：向右
                    limitMoveNum: 1, // 滚动行数
                    step: 1, // 滚动速度
                    hoverStop: false, // 鼠标悬停关闭
                    singleHeight: 22, // 单行停顿高度
                    waitTime: 2500 // 单行停顿时间
                }
            }
        },
        methods: {
        }
    }
</script>
<style lang="scss" scoped>
    .seamless-warp {
        overflow: hidden;
        width: 100%;
        height: 22Px;
        ul {
            overflow: hidden;
            height: 100%;
            li {
                width: 100%;
                height: 22Px;
                line-height: 22Px;
                float: left;
                cursor: pointer;
                span {
                    vertical-align: middle;
                }
                .phone {
                    margin-right: 12px;
                }
                .price {
                    margin-right: 12px;
                }
            }
        }
    }
</style>