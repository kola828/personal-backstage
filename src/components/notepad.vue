<template>

  <div class="notepad">
    <div class="n-block">
      <div class="n-add" @click="addDialog = true"><i class="iconfont">&#xe78c;</i></div>
    </div>
    <div class="n-block" v-for="item in list">
      <div class="n-title">
        <span class="n-t-time"> {{item.time}}</span>
        <span class="n-t-del" @click="delNot"><i class="iconfont">&#xe606;</i></span>
      </div>
      <div class="n-con">
        {{item.content}}
      </div>
    </div>



    <el-dialog
            title="请输入内容"
            :visible.sync="addDialog"
            width="30%"
            :before-close="handleClose">
      <div><el-input type="textarea" v-model="addDiaCon"></el-input></div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="addDialog = false">取 消</el-button>
    <el-button type="primary" @click="addDialog = false">确 定</el-button>
  </span>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        addDialog: false,//添加弹框
        addDiaCon:'',
        list:[{
          time:'2017-01-01',
          content:'测试测试测试测试测试',
        }]
      }
    },
    mounted() {


    },


    methods: {
      handleClose(done) {
        console.log(done);
        this.addDialog=false
      },
      delNot(){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {

        });
      }
    }
  }
</script>

<style lang="stylus">
  @import '../style/notepad';
</style>