<template>
  <div class="nav-left">
    <el-menu
            :default-active="activeNav"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            :router = "router"
            active-text-color="#ffd04b">
      <template v-for="item in nav">
        <el-submenu v-if="item.nextLevel" :index="item.index">
          <template slot="title">
            <i class="iconfont" v-html="item.levelOneIcon"></i>
            <span slot="title">{{item.levelOneName}}</span>
          </template>
          <el-menu-item v-for="key in item.nextLevel" :key="key.index" :index="key.link">{{key.levelTwoName}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.link">
          <i class="iconfont" v-html="item.levelOneIcon"></i>
          <span slot="title">{{item.levelOneName}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        router:true,
        activeNav:'noteList',
        nav: [{
          index: '1',
          levelOneName: '工作台',
          levelOneIcon: '&#xe729;',
          nextLevel: [{
            index: '1-1',
            levelTwoName: '工作笔记',
            link: 'noteList'
          }, {
            index: '1-2',
            levelTwoName: '记事本',
            link: 'notepad'
          }]
        }, {
          index: '2',
          levelOneName: '图表',
          levelOneIcon: '&#xe608;',
          nextLevel: [{
            index: '2-1',
            levelTwoName: '柱状图',
            link: 'chart'
          }, {
            index: '2-2',
            levelTwoName: '饼状图',
            link: 'pie'
          }]
        }, {
          index: '3',
          levelOneName: '表格/表单',
          levelOneIcon: '&#xe613;',
          nextLevel: [{
            index: '3-1',
            levelTwoName: '表格',
            link: 'table'
          }]
        }, {
          index: '4',
          levelOneName: '树状图',
          levelOneIcon: '&#xe601;',
          link: 'tree'
        }]
      }
    },
    mounted() {
      this.getPath()
    },

    methods: {
      /**
       * @method navSelect 设置当前激活菜单
       */
      getPath(){
        const url=window.location.href;
        let self=this;
        let l = url.split('/').length-1;
        self.activeNav=url.split('/')[l];
      },

    },

  }
</script>
