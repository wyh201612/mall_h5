<template>
    <div id="app">
        <Loading v-show="isLoading" />
        <router-view />
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Loading from '@/components/Loading'
    export default {
        name: 'App',
        components: {
            Loading
        },
        computed:{
            ...mapState({
                isLoading: state => state.user.isLoading,
            })
        },
    }
</script>
