<template>

  <div class="tree">
    <el-tree
            :data="data4"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
    </el-tree>
  </div>

</template>

<script>
  let id = 1000;
  export default {
    data() {
      return {
        data4: [{
          id: 1,
          label: '超级管理员',
          children: [{
            id: 2,
            label: '管理员1号',
            children: [{
              id: 4,
              label: '部长'
            }, {
              id: 5,
              label: '部长'
            }]
          },{
            id: 3,
            label: '管理员2号',
            children: [{
              id: 6,
              label: '部长'
            }, {
              id: 7,
              label: '部长'
            }]
          },]
        },],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    mounted() {


    },
    methods: {
      append(data) {
        const newChild = { id: id++, label: '新增员工', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
            <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span class="test">
            <span>{node.label}</span>
        </span>
        <span>
        <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>插入</el-button>
        <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
        </span>
        </span>);
      }
    }


  }
</script>

<style lang="stylus">

  @import '../style/tree';

</style>
