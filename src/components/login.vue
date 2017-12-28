<!--suppress ALL -->
<template>
  <div class="main">
    <form class="login-form" @submit.prevent="login">
      <div class="form-box">
        <div class="form-input">
          <div class="form-input">
            <span class="label">用户名：</span>
            <input type="text" name="userName" placeholder="手机号/账户名" maxlength="11" v-model="name"/>
            <div class="msg-info">{{msg}}</div>
          </div>
          <div class="form-input">
            <span class="label">密 码：</span>
            <input type="password" name="password" placeholder="请输入您的密码" maxlength="20" v-model="pw"/>
            <div class="msg-info">{{msg2}}</div>
          </div>
        </div>
        <button class="login-btn" @click="login">登 录</button>
      </div>
    </form>
  </div>

</template>

<script>
//  import axios from 'axios';
  import {login} from '../store/getdata'
  import {mapState, mapActions,mapMutations} from 'vuex'
  export default {
    data() {
      return {
        name: '',
        pw: '',
        msg: '',
        msg2: ''
      }
    },
    mounted() {

    },
    methods: {
//      ...mapActions([
//        'login',
//      ]),
      ...mapMutations([
        'USER'
      ]),
      login() {
        var self = this;
        if (self.name == '') {
          self.msg = '用户名不能为空';
          self.msg2 = ''
        } else if (self.pw == '') {
          self.msg2 = '密码不能为空';
          self.msg = ''
        } else {
          var param = {
            username: self.name,
            password: self.pw
          }
          login(param)
              .then(function (response) {
                if (response.data.code == 0) {
                  self.USER({
                    user:response.data.data.name
                  });
                  sessionStorage.setItem('user', response.data.data.name);
                  self.$router.push({name: 'noteList'});

                } else {
                  self.msg2 = response.data.msg
                }
              })
              .catch(function (error) {
                console.log(error)
              })
        }
      }
    },

  }
</script>
<style lang="stylus">

  @import '../style/login';

</style>