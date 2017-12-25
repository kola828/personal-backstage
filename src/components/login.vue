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
  import axios from 'axios';
  import {setSession} from '../store/common'
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
          axios({
            method: 'POST',
            url: '/api/user/login',
            data: param
          })
              .then(function (response) {
                if (response.data.code == 0) {
                  let params={
                    name:response.data.data.name
                  }
                  console.log(params)
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