<template>
  <div class="content">
    <header-nav></header-nav>
    <div class="wrap">
      <left-nav></left-nav>
      <div class="main1">
        <router-view/>
      </div>
    </div>

  </div>
</template>
<script>
  import leftNav from '../components/nav/left-nav.vue';
  import headerNav from '../components/nav/header-nav.vue';
  export default {
    data(){
      return{

      }
    },
    mounted(){



    },


    methods: {},
    components:{
      leftNav,
      headerNav
    }
  }
</script>
<style lang="stylus">

  @import '../style/index';

</style>