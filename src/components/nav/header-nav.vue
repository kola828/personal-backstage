<template>
  <div class="header-nav">
    <div class="h-title" @click="go">个人工作台</div>
    <div class="h-right">
      <div class="h-img">
        <img src="../../image/head.jpg">
      </div>
      <span v-text="user"></span>
    </div>
  </div>
</template>

<script>
//  import {mapState, mapActions,mapMutations} from 'vuex'
  export default {
    data() {
      return {
        user:sessionStorage.getItem("user")
      }
    },
    computed: {
//      ...mapState([
//        'user',
//      ]),

    },
    mounted() {


    },


    methods: {
      go(){
        this.$router.push({name: 'noteList'});
      }
    },

  }
</script>
