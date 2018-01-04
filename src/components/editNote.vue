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
  import {mapState, mapActions, mapMutations} from 'vuex'

  export default {
    data() {
      return {
        title: '',
        value: '',
        id: this.$route.query.id
      }
    },
    computed: {
      ...mapState([
        'user',
//        'artId',
        'addOneArt'
      ]),
      addOneArt: {
        get () {
          return this.$store.state.addOneArt
        },
        set (value) {
          this.$store.commit('ONE_ART', value)
        }
      }

    },
    mounted() {

      console.log(this.$route.query);
      this.getArtInfo()
    },

    methods: {
      ...mapActions([
        'addArt',
        'getOneArt'
      ]),
      ...mapMutations([
        'ONE_ART',
        'ART_ID'
      ]),

      /**
       * @description 获取文章详情
       */
      async getArtInfo() {
        let self = this;
        if (self.id > 0) {
          self.ART_ID({
            artId: self.id
          });
          await self.getOneArt();
          self.title = self.addOneArt.art_title;
          self.value = self.addOneArt.art_contant;
        } else {

        }
      },

      /**
       * @description 保存文章
       */
      save() {
        let self = this;

        if (self.title === '') {
          self.$message.error('标题不能为空');

        } else {
          let params = {
            art_title: self.title,
            art_contant: self.value,
            author: sessionStorage.getItem("user")
          };

          if (self.id > 0) {
            params.id = self.id;
          }
          self.ONE_ART({
            data: params
          });
          self.addArt()
              .then((response) => {
                console.log(response);
                self.$router.push({name: 'noteList'});
              })
              .catch((error) => {
                console.log(error)
              })
        }
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