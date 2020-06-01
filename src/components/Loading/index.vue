<template>
    <div class="loading-mask loadingImg is-fullscreen">
        <div class="loading-spinner">
            <van-loading type="spinner" size="24px"/>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
        },
        computed: {
        },
        data () {
            return {
            }
        },
        created(){
        },
        watch:{
        },
        mounted(){
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .loading-mask.is-fullscreen {
        position: fixed;
    }
    .loading-mask {
        position: absolute;
        z-index: 2000;
        background-color: rgba(255, 255, 255, 0.4);
        margin: 0;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: opacity 0.3s;
    }
    .loading-spinner {
        top: 50%;
        margin-top: -21px;
        width: 100%;
        text-align: center;
        position: absolute;
    }
</style>