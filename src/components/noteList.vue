<template>
  <div class="note-list">
    <div><router-link to="editNote"><button><i class="iconfont">&#xe78c;</i>新增笔记</button></router-link></div>
    <div>
      <el-table
              :data="noteList"
              style="width: 100%">
        <el-table-column
                prop="title"
                label="标题">
        </el-table-column>
        <el-table-column
                prop="data"
                label="日期">
        </el-table-column>
        <el-table-column
                label="操作"
                width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        noteList: [{
          title: '笔记一',
          data: '2016-05-02',
        }]
      }
    },
    mounted() {
      console.log(111);
      axios({
        method: 'POST',
        url: '/api/atr/test',
      });
    },


    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

  }
</script>

<style lang="stylus">
  @import '../style/noteList';
</style>