<template>

  <div class="table">
    <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
      <el-table-column
              type="selection"
              width="55">
      </el-table-column>
      <el-table-column
              prop="name"
              label="姓名"
              width="120">
      </el-table-column>
      <el-table-column
              prop="job"
              label="职位">
      </el-table-column>
      <el-table-column
              prop="phone"
              label="手机">
      </el-table-column>
      <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip
      >
      </el-table-column>
      <!--<el-table-column-->
              <!--prop="address"-->
              <!--label="地址"-->
              <!--show-overflow-tooltip>-->
      <!--</el-table-column>-->
    </el-table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '张三',
          job:'普通员工',
          phone:'1234567891',
          address: 'xx省xxx市xx区xx街'
        },{
          name: '张三',
          job:'普通员工',
          phone:'1234567891',
          address: 'xx省xxx市xx区xx街'
        },{
          name: '张三',
          job:'普通员工',
          phone:'1234567891',
          address: 'xx省xxx市xx区xx街'
        },{
          name: '张三',
          job:'普通员工',
          phone:'1234567891',
          address: 'xx省xxx市xx区xx街'
        },],
        multipleSelection: []
      }
    },
    mounted() {


    },
    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },





  }
</script>
<style lang="stylus">

@import '../style/table';

</style>