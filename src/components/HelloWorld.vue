<template>
  <div class="hello">
    <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'hello',
    data() {
      return {
        userName: '',
        age: ''
      }
    },
    methods: {
      addUser() {
        var name = this.userName;
        var age = this.age;
        console.log(this);

        axios({
          method: 'POST',
          url: '/api/user/addUser',
          data: {
            username: name,
            age: age
          }
        });
      }
    }
  }
</script>


