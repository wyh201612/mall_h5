<template>
  <section class="app-main">
    <transition :name="transitionName">
      <router-view :key="key" :goldenBeansInfo='goldenBeansInfo' :billNums='billNums' :activityCouponMemberList='activityCouponMemberList'/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  props:{
    goldenBeansInfo:{
      type: Object
    },
    billNums:{
        type: Object
    },
    activityCouponMemberList:{
        type: Object
    },
  },
  data(){
      return {
          transitionName:''
      }
  },
  created() {
  },
  computed: {
    key() {
      return this.$route.path
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-main {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
</style>

