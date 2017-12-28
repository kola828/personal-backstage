<template>
  <div class="note-list">
    <div>
      <router-link to="editNote">
        <button><i class="iconfont">&#xe78c;</i>新增笔记</button>
      </router-link>
    </div>
    <div>
      <el-table
              :data="artList.result"
              style="width: 100%">
        <el-table-column
                prop="art_title"
                label="标题">
        </el-table-column>
        <el-table-column
                prop="art_edit_time"
                label="日期">
        </el-table-column>
        <el-table-column
                label="操作"
                width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
            background
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="5"
            :total=artList.mun>
    </el-pagination>


    <el-dialog
            title="提示"
            :visible.sync="delDialog"
            width="30%"
            center>
      <span>您确认要删除这篇文章吗？</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="delDialog = false">取 消</el-button>
    <el-button type="primary" @click="delOk">确 定</el-button>
  </span>
    </el-dialog>


  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import {delArt} from '../store/getdata'

  export default {
    data() {
      return {
        delDialog: false,
        row: '',
//        noteList: [{
//          title: '笔记一',
//          data: '2016-05-02',
//        }]
      }
    },
    computed: {
      ...mapState([
        'artList',
      ]),

    },
    mounted() {
      this.getArtList()
    },


    methods: {
      ...mapActions([
        'getArtList',
      ]),
      ...mapMutations([
        'PAGE',
      ]),
      /**
       * @description点击查看详情
       * @param row
       */
      handleClick(row) {
        let self = this;
        console.log(row);
        self.$router.push({name: 'editNote', query: {id: row.art_id}});
      },
      /**
       * @description 点击弹框
       * @param row
       */
      del(row) {
        let self = this;
        self.delDialog = true;
        console.log(row);
        self.row = row.art_id
      },
      /**
       * @description 确认删除
       */
      delOk() {
        let self = this;
        let params = {
          id: self.row
        };
        console.log(params);

        delArt(params)
            .then((response) => {
              console.log(response);
              self.delDialog = false;
              self.getArtList();
            })
            .catch((error) => {
              console.log(error)
            })

      },
      /**
       * @description 翻页
       * @param val
       */
      handleCurrentChange(val) {
        this.PAGE({page:val});
        this.getArtList();
        console.log(val)
      }

    },

  }
</script>

<style lang="stylus">
  @import '../style/noteList';
</style>