<template>

  <div class="edit-note">
    <header-nav></header-nav>
    <div class="edit-c">
      <div class="art-title"><input v-model="title" placeholder="请输入标题"></div>
      <mavon-editor v-model="value"></mavon-editor>
      <div class="btn-group">
        <button @click="save">保存</button>
        <router-link to="index">
          <button>返回</button>
        </router-link>
      </div>

    </div>
  </div>

</template>

<script>
  import headerNav from '../components/nav/header-nav.vue';
  import {mavonEditor} from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
//  import {addArt} from "../store/getdata"
  import {mapState, mapActions,mapMutations} from 'vuex'

  export default {
    data() {
      return {
        title:'',
        value: '',
      }
    },
    mounted() {

      this.test()
    },

    methods: {
      ...mapActions([
        'test',
      ]),
      save(){

      },

    },
    components: {
      headerNav,
      mavonEditor

    }

  }
</script>
<style lang="stylus">

  @import '../style/editNote';

</style>