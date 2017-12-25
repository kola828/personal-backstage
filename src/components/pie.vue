<template>

      <div class="pie">
            <div id="work">hhh</div>
      </div>


</template>

<script>
  //  var echarts = require('echarts');
  import echarts from 'echarts'

  export default {
    data() {
      return {
//        workData:['2/1','2/2','2/3','2/4','2/5','2/6','2/7','2/8','2/9','2/10','2/11','2/12','2/13','2/14','2/15','2/16','2/17','2/18','2/19','2/20','2/21','2/22']
        workChart:{
          data:['2/1','2/2','2/3','2/4','2/5','2/6','2/7','2/8','2/9','2/10','2/11','2/12','2/13','2/14','2/15','2/16','2/17','2/18','2/19','2/20','2/21','2/22'],
          time:[8,7,8,8,6,8,9,8,8,8,6,9,8,8,8,10,8,8,8,10,12,8]
        }
      }
    },
    mounted() {
      this.workChartInit()


    },


    methods: {

      workChartInit() {
        let self=this;
        let myChart = echarts.init(document.getElementById('work'));
        let option = {
          title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ],
          color:['#E6A23C','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
        };
        myChart.setOption(option)
      }
    }
  }


</script>
<style lang="stylus">

      @import '../style/pie';

</style>